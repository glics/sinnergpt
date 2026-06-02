export type MessageItem = {
  message: string;
  sender: string;
  pending?: boolean;
};

export type WeightedString = {
  value: string;
  weight: number;
};

const responses: WeightedString[] = [
  { value: 'Tennis', weight: 4 },
  { value: 'Racchetta', weight: 3 },
  { value: 'Pallina', weight: 2 },
  { value: 'Ora tennis io', weight: 1 },
  { value: 'Sicuramente non il padel', weight: 1 },
  { value: 'wimbledon', weight: 1 }
];

export function getRandomResponse(): string {
  // Probably not the most efficient
  // i dont care tho
  // ask ai if you want a better version
  const weightedResponses: string[] = [];
  responses.forEach(({ value, weight }) => {
    for (let i = 0; i < weight; i++) {
      weightedResponses.push(value);
    }
  });

  return weightedResponses[Math.floor(Math.random() * weightedResponses.length)];
}
