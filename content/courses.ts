export type Course = {
  title: string;
  image: string;
};

export const featuredCourses: readonly Course[] = [
  { title: "Learn Figma from Basic", image: "/figma/courses/image-04.jpeg" },
  { title: "Build Digital Asset", image: "/figma/courses/image-08.jpeg" },
  { title: "The Power of Big Data", image: "/figma/courses/image-10.jpeg" },
  { title: "Balancing Productivity and Creativity", image: "/figma/courses/image-11.jpeg" },
  { title: "Mastering Money Management", image: "/figma/courses/image-06.jpeg" },
  { title: "From Idea to Startup Success", image: "/figma/courses/image-09.jpeg" },
];

export const courseCardMeta: readonly string[] = [
  "17 Lessons",
  "2 hours 16 mins",
  "59 Comments",
];
