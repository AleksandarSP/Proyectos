export interface Photo{
    _id?: string;
    title: string;
    description: string;
    imagePath: string;
    voteCount: number;
    comments: [
        {user: string, comment: string}
    ]
}