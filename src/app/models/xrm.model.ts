export interface Xrm {
  description: string;
  taskType: string;
  status: string;
  projected: Time;
  actual: Time;
}

interface Time {
  startDate: string;
  endDate: string;
  time: string;
}

