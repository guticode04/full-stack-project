export const fetchAnnotation = annotationId => (
  $.ajax ({
    url: `/api/annotations/${annotationId}`,
    method: 'GET'
  })
);

export const createAnnotation = annotation => (
  $.ajax ({
    url: `/api/annotations`,
    method: 'POST',
    data: { annotation }
  })
);

// export const updateAnnotation = annotation => ()s