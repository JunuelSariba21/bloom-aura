import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { GalleryComponent } from './pages/gallery/gallery';
import { Login } from './pages/login/login';
import { Contact } from './pages/contact/contact';
import { FlowerDetailComponent } from './pages/flower-detail/flower-detail';
import { CategoryGalleryComponent } from './pages/category-gallery/category-gallery';

export const routes: Routes = [
     { path: '', component: LandingComponent },
     { path: 'home', component: HomeComponent },
     { path: 'about', component: AboutComponent},
     { path: 'gallery', component: GalleryComponent},
     { path: 'category/:id', component: CategoryGalleryComponent},
     { path: 'flower/:id', component: FlowerDetailComponent },
     { path: 'login', component:Login},
     { path: 'contact', component: Contact}
];
