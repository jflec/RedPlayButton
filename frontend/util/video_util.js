export const fetchVideo = (videoId, userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/videos/${videoId}`,
    data: { userId },
  });
};

export const fetchVideos = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/videos`,
  });
};

export const searchVideos = (query) => {
  return $.ajax({
    method: 'GET',
    url: `/api/videos`,
    data: { query },
  });
};

export const postVideo = (formData) => {
  return $.ajax({
    method: 'POST',
    url: `/api/videos`,
    data: formData,
    contentType: false,
    processData: false,
  });
};

export const deleteVideo = (videoId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/videos/${videoId}`,
  });
};
