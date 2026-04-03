import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { GalleryComponent } from './pages/gallery/gallery';
import { RoseGallery } from './pages/rose-gallery/rose-gallery';
import { RedRose } from './pages/flower-detail/red-rose/red-rose';
import { Login } from './pages/login/login';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
     { path: '', component: LandingComponent },
     { path: 'home', component: HomeComponent },
     { path: 'about', component: AboutComponent},
     { path: 'gallery', component: GalleryComponent},
     { path: 'rose-gallery', component: RoseGallery},
     { path: 'red-rose', component: RedRose},
     { path: 'login', component:Login},
     { path: 'contact', component: Contact}
];
