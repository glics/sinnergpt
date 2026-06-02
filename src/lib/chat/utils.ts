export interface MessageItem {
  message: string;
  sender: 'user' | 'system';
  pending?: boolean;
}
