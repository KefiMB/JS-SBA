function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
  const result = [];
  const learnerMap = {};

  try {
    for (let submission of LearnerSubmissions) {
      const learnerId = submission.learner_id;
      const assignmentId = submission.assignemnt_id;
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
      });

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
      avg, return newData
    });


    for (let learnerId in learnerMap) {
      const learnerData = learnerMap[learnerId];
      const avg = learnerData.totalPossible > 0 ? learnerData.totalScore / learnerData.totalPossible : 0;
      
      const formattedData = {
        id: learnerData.id,
        avg: Number(avg.toFixed(3))
      };
      for (let key in learnerData) {
        if (key !== 'id' && key !== 'avg' && key !== 'totalScore' && key !== 'totalPossible') {
          formattedData[key] = Number(learnerData[key].toFixed(3));
        }
      }

      result.push(formattedData);
    }
  }
    }
  }