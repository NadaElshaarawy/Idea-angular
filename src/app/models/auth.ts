export type Auth = 'login' | 'register';

export interface AuthDTO{
    username: string;
    password: string;
}