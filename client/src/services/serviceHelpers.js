export const combineMentorInfo = (mentor = []) => {
  return mentor.filter(admin => admin.studyAdminRole === 'Mentor').map(mentor => mentor.name);
};

export const roundRating = value => {
  return Math.round(value * 10) / 10 || 0;
};
