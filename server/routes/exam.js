import express from "express";

const router = express.Router();

router.post("/grade", (req, res) => {
  const { provider, userAnswers = {}, questions = [] } = req.body;

  if (!questions || !Array.isArray(questions)) {
    return res.status(400).json({ success: false, message: "Invalid exam payload. Questions array required." });
  }

  let correctCount = 0;
  const domainBreakdown = {};
  const questionResults = [];

  questions.forEach((q, idx) => {
    const selectedAnswer = userAnswers[idx];
    const correctOpt = q.answers?.find((a) => a.correct);
    const isCorrect = selectedAnswer === correctOpt?.id;

    if (isCorrect) correctCount++;

    const domain = q.domain || "Core Concepts";
    if (!domainBreakdown[domain]) {
      domainBreakdown[domain] = { total: 0, correct: 0 };
    }
    domainBreakdown[domain].total++;
    if (isCorrect) domainBreakdown[domain].correct++;

    questionResults.push({
      questionId: q.id,
      domain,
      selectedAnswer: selectedAnswer || null,
      correctAnswer: correctOpt?.id || null,
      isCorrect,
      explanation: q.explanation || "Review the core domain objectives."
    });
  });

  const totalQuestions = questions.length || 1;
  const scorePercentage = Math.round((correctCount / totalQuestions) * 100);
  const isPassed = scorePercentage >= 70;

  const domainAnalytics = Object.entries(domainBreakdown).map(([domain, stats]) => ({
    domain,
    correct: stats.correct,
    total: stats.total,
    percentage: Math.round((stats.correct / stats.total) * 100)
  }));

  res.json({
    success: true,
    gradedAt: new Date().toISOString(),
    provider: provider || "general",
    scorePercentage,
    correctCount,
    totalQuestions,
    isPassed,
    domainAnalytics,
    questionResults
  });
});

export default router;
