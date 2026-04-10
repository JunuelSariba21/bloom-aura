import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'category/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'flower/:id',
    renderMode: RenderMode.Server
  },
];
