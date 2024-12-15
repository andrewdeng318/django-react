import time
import logging

logger = logging.getLogger(__name__)

class RequestTimeMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Record start time
        start_time = time.time()

        # Call the next middleware or view
        response = self.get_response(request)

        # Calculate request processing time
        duration = time.time() - start_time
        
        # Log request path and processing time
        logger.info(f'Request path: {request.path} - Processing time: {duration:.2f}s')

        # Add processing time to response headers
        response['X-Request-Duration'] = str(duration)

        return response
