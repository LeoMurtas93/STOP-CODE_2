export interface Root {
    status: string
    sources: SourceNews[]
  }
  
  export interface SourceNews {
    id: string
    author: string
    name: string
    title: string
    description: string
    url: string
    urlToImage: any
    category: string
    language: string
    country: string
  }

  export class NewNewsDto {
    constructor(
      public id: number,
      public name: string = '',
      public description: string = '',
      public title: string = '',
      public url: string = '',
      public urlToImage: any = '',
      public category: string = '',
      public language: string = '',
      public country: string = '',
      public author: string = '',
    ) {}
  }

  // export class NewsSearch{
  //   constructor(
  //     // public q: string = "",
  //     public id: number,
  //     public description: string = '',
  //     public title: string = '',
  //     public url: string = '',
  //     public urlToImage: any = '',
  //     // public category: string = '',
  //     // public language: string = '',
  //     // public country: string = ''
  //   ){}
  // }