export interface CreateTableUseCase {
  execute(options: CreateTableOptions): string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export interface SaveFileUseCase {
  execute(options: SaveFileOptions): boolean;
}

export interface SaveFileOptions {
  destination?: string;
  fileContent: string;
  fileName?: string;
}
