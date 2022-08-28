const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '953e25848a6fab44c1e72fc4253e26e6',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;