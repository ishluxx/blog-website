export interface BlogPost {
  id: string;
  date: string;
  author: Author[];
  title: string;
  summary: Summary[];
  content: Content[];
}

export interface Author {
  image: string;
  name: string;
}

export interface Summary {
  image: string;
  intro: string;
}

export interface Content {
  paragraphs: Paragraph[];
}

export interface Paragraph {
  sub_section_title?: string;
  section_conclusion?: string;
  image: string;
  description: string;
}

export interface BlogPostsResponse {
  posts: BlogPost[];
}
