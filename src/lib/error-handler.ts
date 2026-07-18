import { NextResponse } from "next/server";

/**
 * Standardized API error handler.
 * Ensures no internal details leak to the client.
 */
export function handleApiError(error: unknown) {
  console.error("[API Error]:", error);

  if (error instanceof ValidationError) {
    return NextResponse.json(
      { success: false, error: error.message, details: error.details },
      { status: 400 }
    );
  }

  if (error instanceof NotFoundError) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 404 }
    );
  }

  // Never expose internal error details
  return NextResponse.json(
    {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    },
    { status: 500 }
  );
}

export class ValidationError extends Error {
  details: Record<string, string[]>;

  constructor(message: string, details: Record<string, string[]> = {}) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export class NotFoundError extends Error {
  constructor(message: string = "Resource not found") {
    super(message);
    this.name = "NotFoundError";
  }
}

/**
 * Wraps an async API handler with standardized error handling.
 */
export function withErrorHandler(
  handler: (request: Request, context?: unknown) => Promise<NextResponse>
) {
  return async (request: Request, context?: unknown) => {
    try {
      return await handler(request, context);
    } catch (error) {
      return handleApiError(error);
    }
  };
}
