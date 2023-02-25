export  type JobType = () => void;

export interface IScheduler {
  schedule(job: JobType): void;

  deleteJob(): void;

  isScheduled: boolean;
}
