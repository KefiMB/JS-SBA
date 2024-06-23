function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
  // Validate input data
  validateData(courseInfo, assignmentGroup, learnerSubmissions);

  const transformedData = [];

  learnerSubmissions.forEach(learner => {
    const assignmentScores = {};
    let totalScore = 0;
    let totalPossible = 0;

    learner.submissions.forEach(submission => {
      const { assignment_id, points_possible, score, submitted_at, due_at } = submission;
      const assignment = assignmentGroup.assignments.find(a => a.id === assignment_id);
      if (!assignment) {
        // Assignment not found in the AssignmentGroup, skip it
        return;
      }

      const dueDate = new Date(due_at);
      const submittedDate = new Date(submitted_at);
      const currentDate = new Date();

      // Skip assignments that are not yet due
      if (dueDate > currentDate) {
        return;
      }

      let adjustedScore = score;
      if (submittedDate > dueDate) {
        adjustedScore = Math.max(score - points_possible * 0.1, 0);
      }

      assignmentScores[assignment_id] = adjustedScore / points_possible;
      totalScore += adjustedScore;
      totalPossible += points_possible;
    });

    const avg = totalPossible > 0 ? (totalScore / totalPossible) : 0;

    transformedData.push({
      id: learner.learner_id,
      avg, return transformedData;
    }
