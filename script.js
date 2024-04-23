  
  function getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmissions]) {
    // here, we would process this data to achieve the desired result.
    let CourseInfo = id;
    const AssignmentGroup = "Fundamentals of Javascript"
    AssignmentGroup = ["Fundamentals of JavaScript", "Declare a Variable", "Write a Function", "Code the World" ]
    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    ];
  
    return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);
  