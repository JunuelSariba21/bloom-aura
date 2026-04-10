import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class GalleryComponent {
  
  // This array powers your entire main gallery grid
  botanicalCategories = [
    {
      badgeColor: 'red',
      badgeText: 'PASSION',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Rosa_rubiginosa_1.jpg/800px-Rosa_rubiginosa_1.jpg',
      title: 'Roses: Love & Tradition',
      description: 'Timeless symbols of love, secrecy, and beauty.',
      tags: ['Grandiflora', 'Floribunda'],
      route: ['/category', 'roses'] 
    },
    {
      badgeColor: 'gray',
      badgeText: 'PURITY',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Lilium_candidum_1.jpg/800px-Lilium_candidum_1.jpg',
      title: 'Lilies: Rebirth',
      description: 'Associated closely with elegant renewal and majestic purity.',
      tags: ['Asiatic', 'Oriental'],
      route: ['/category', 'lilies'] 
    },
    {
      badgeColor: 'yellow',
      badgeText: 'JOY',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/800px-Sunflower_sky_backdrop.jpg',
      title: 'Sunflowers: Adoration',
      description: 'Bright, towering flowers that faithfully follow the sun.',
      tags: ['Mammoth', 'Russian'],
      route: ['/category', 'sunflowers'] // FIXED: Now points to the Sunflowers category
    },
    {
      badgeColor: 'blue',
      badgeText: 'SERENITY',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Hydrangea_macrophylla_%27Nikko_Blue%27_1.jpg/800px-Hydrangea_macrophylla_%27Nikko_Blue%27_1.jpg',
      title: 'Hydrangeas: Gratitude',
      description: 'Soft, voluminous blooms symbolizing profound appreciation.',
      tags: ['Mophead', 'Lacecap'],
      route: ['/category', 'hydrangeas'] // FIXED: Now points to the Hydrangeas category
    },
    {
      badgeColor: 'purple',
      badgeText: 'ROYALTY',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Phalaenopsis_amabilis_orchid.jpg/800px-Phalaenopsis_amabilis_orchid.jpg',
      title: 'Orchids: Strength',
      description: 'Exotic, highly coveted, and incredibly resilient flowers.',
      tags: ['Phalaenopsis', 'Cattleya'],
      route: ['/category', 'orchids'] // FIXED: Now points to the Orchids category
    },
    {
      badgeColor: 'pink',
      badgeText: 'GRACE',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Paeonia_lactiflora_02.jpg/800px-Paeonia_lactiflora_02.jpg',
      title: 'Peonies: Prosperity',
      description: 'Lush, romantic symbols of wealth, honor, and good fortune.',
      tags: ['Herbaceous', 'Tree Peony'],
      route: ['/category', 'peonies'] // FIXED: Now points to the Peonies category
    },
    {
      badgeColor: 'orange',
      badgeText: 'ENERGY',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Ranunculus_asiaticus_1.jpg/800px-Ranunculus_asiaticus_1.jpg',
      title: 'Ranunculus: Charm',
      description: 'Radiant, paper-thin blooms overflowing with vibrant energy.',
      tags: ['Persian', 'Tecolote'],
      route: ['/category', 'ranunculus'] // FIXED: Now points to the Ranunculus category
    }
  ];
}