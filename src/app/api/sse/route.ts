export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      let counter = 0;
      const interval = setInterval(() => {
        controller.enqueue(
          encoder.encode(
            `data: ${JSON.stringify({
              time: new Date(),
              count: counter++,
            })}\n\n`
          )
        );
      }, 1000);

      return () => clearInterval(interval);
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
