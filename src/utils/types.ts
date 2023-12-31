export interface Task {
	id: number;
	userId: number;
	title: string;
	startTime: string;
	endTime?: string;
	completed: boolean;
}

export interface TaskResponse {
	id: number;
	userId: number;
	title: string;
	completed: boolean;
}
