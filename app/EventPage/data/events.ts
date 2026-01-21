export interface DiaryEvent {
  id: number;
  title: string;
  description: string;
  location: string;
  image: string;
}

export const diaryEvents: DiaryEvent[] = [
  {
    id: 1,
    title: "Community Food Drive",
    description:
      "Help distribute food packages to families in need.",
    location: "Community Center, Main St",
    image: "/event1.jpg",
  },
];
