export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 将 API 请求代理到 BACKEND Worker 服务绑定
    if (url.pathname.startsWith('/api') || url.pathname.startsWith('/external_api')) {
      return env.BACKEND.fetch(request);
    }

    // 其他请求返回 Pages 静态资源
    return env.ASSETS.fetch(request);
  }
};
