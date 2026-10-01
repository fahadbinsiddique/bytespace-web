export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  portrait: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    portrait: "/figma/testimonials/portrait-01.png",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "I\u2019ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    portrait: "/figma/testimonials/portrait-02.png",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\u2019s fulfilling to see my courses making a positive impact on learners globally.",
    portrait: "/figma/testimonials/portrait-03.png",
  },
];
