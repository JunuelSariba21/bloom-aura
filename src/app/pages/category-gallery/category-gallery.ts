import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-gallery.html',
  styleUrl: './category-gallery.css',
})
export class CategoryGalleryComponent implements OnInit {
  categoryId = '';
  categoryData: any;

  // The comprehensive database for all sub-galleries
  categoryDatabase: any = {
    'roses': {
      title: 'The Language of Roses',
      description: 'Explore the universal symbol of love and beauty. Each hue tells a unique story.',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Keukenhof_Tulips_%2847706316261%29.jpg/1920px-Keukenhof_Tulips_%2847706316261%29.jpg', // You can change this hero if you want!
      tag: 'THE ROSE COLLECTION',
      flowers: [
        { id: 'red-rose', name: 'Red Rose', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Rosa_rubiginosa_1.jpg/800px-Rosa_rubiginosa_1.jpg' },
        { id: 'white-rose', name: 'White Rose', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Rosa_alba_%27Maxima%27_01.jpg/800px-Rosa_alba_%27Maxima%27_01.jpg' },
        { id: 'yellow-rose', name: 'Yellow Rose', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Rosa_%27Arthur_Bell%27.jpg/800px-Rosa_%27Arthur_Bell%27.jpg' },
        { id: 'pink-rose', name: 'Pink Rose', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Rosa_%27Queen_Elizabeth%27.jpg/800px-Rosa_%27Queen_Elizabeth%27.jpg' },
        { id: 'lavender-rose', name: 'Lavender Rose', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Rosa_%27Blue_Moon%27_20110620.jpg/800px-Rosa_%27Blue_Moon%27_20110620.jpg' }
      ]
    },
    'lilies': {
      title: 'The Grace of Lilies',
      description: 'Discover the ancient symbols of purity, rebirth, and majesty.',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Lilium_bulbiferum_02.jpg/1920px-Lilium_bulbiferum_02.jpg',
      tag: 'THE LILY COLLECTION',
      flowers: [
        { id: 'white-lily', name: 'Madonna Lily (White)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Lilium_candidum_1.jpg/800px-Lilium_candidum_1.jpg' },
        { id: 'stargazer-lily', name: 'Stargazer Lily', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Stargazer_Lily_Macro_1.jpg/800px-Stargazer_Lily_Macro_1.jpg' },
        { id: 'tiger-lily', name: 'Tiger Lily', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Lilium_lancifolium_1.jpg/800px-Lilium_lancifolium_1.jpg' }
      ]
    },
    'sunflowers': {
      title: 'The Golden Sunflowers',
      description: 'Bright, towering blooms representing unwavering faith and unconditional love.',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/1920px-Sunflower_sky_backdrop.jpg',
      tag: 'THE SUNFLOWER COLLECTION',
      flowers: [
        { id: 'common-sunflower', name: 'Common Sunflower', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/A_sunflower.jpg/800px-A_sunflower.jpg' },
        { id: 'red-sunflower', name: 'Velvet Queen (Red)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Red_sunflower.jpg/800px-Red_sunflower.jpg' },
        { id: 'dwarf-sunflower', name: 'Teddy Bear (Dwarf)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Helianthus_annuus_%27Teddy_Bear%27_01.jpg/800px-Helianthus_annuus_%27Teddy_Bear%27_01.jpg' }
      ]
    },
    'hydrangeas': {
      title: 'The Honest Hydrangea',
      description: 'Voluminous blooms symbolizing heartfelt emotion and deep gratitude.',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Hydrangea_macrophylla_2.jpg/1920px-Hydrangea_macrophylla_2.jpg',
      tag: 'THE HYDRANGEA COLLECTION',
      flowers: [
        { id: 'blue-hydrangea', name: 'Blue Mophead', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Hydrangea_macrophylla_%27Nikko_Blue%27_1.jpg/800px-Hydrangea_macrophylla_%27Nikko_Blue%27_1.jpg' },
        { id: 'pink-hydrangea', name: 'Pink Lacecap', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Hydrangea_macrophylla_%28Pink%29.jpg/800px-Hydrangea_macrophylla_%28Pink%29.jpg' },
        { id: 'white-hydrangea', name: 'White Panicle', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Hydrangea_paniculata_%27Grandiflora%27.jpg/800px-Hydrangea_paniculata_%27Grandiflora%27.jpg' }
      ]
    },
    'orchids': {
      title: 'The Exotic Orchid',
      description: 'Highly coveted flowers of perfect symmetry, representing mature charm.',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Orchid_display.jpg/1920px-Orchid_display.jpg',
      tag: 'THE ORCHID COLLECTION',
      flowers: [
        { id: 'phalaenopsis-orchid', name: 'Moth Orchid (Phalaenopsis)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Phalaenopsis_amabilis_orchid.jpg/800px-Phalaenopsis_amabilis_orchid.jpg' },
        { id: 'cattleya-orchid', name: 'Corsage Orchid (Cattleya)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Cattleya_labiata_1.jpg/800px-Cattleya_labiata_1.jpg' },
        { id: 'cymbidium-orchid', name: 'Boat Orchid (Cymbidium)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Cymbidium_hybrid_1.jpg/800px-Cymbidium_hybrid_1.jpg' }
      ]
    },
    'peonies': {
      title: 'The Prosperous Peony',
      description: 'Lush, romantic blooms deeply tied to concepts of prosperity and good fortune.',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Paeonia_lactiflora_01.jpg/1920px-Paeonia_lactiflora_01.jpg',
      tag: 'THE PEONY COLLECTION',
      flowers: [
        { id: 'pink-peony', name: 'Sarah Bernhardt (Pink)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Paeonia_lactiflora_02.jpg/800px-Paeonia_lactiflora_02.jpg' },
        { id: 'white-peony', name: 'Festiva Maxima (White)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Paeonia_lactiflora_%27Festiva_Maxima%27_01.jpg/800px-Paeonia_lactiflora_%27Festiva_Maxima%27_01.jpg' },
        { id: 'red-peony', name: 'Red Charm (Red)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Paeonia_officinalis_1.jpg/800px-Paeonia_officinalis_1.jpg' }
      ]
    },
    'ranunculus': {
      title: 'The Radiant Ranunculus',
      description: 'Paper-thin blooms overflowing with vibrant energy and immense attractiveness.',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ranunculus_asiaticus_flower_field.jpg/1920px-Ranunculus_asiaticus_flower_field.jpg',
      tag: 'THE RANUNCULUS COLLECTION',
      flowers: [
        { id: 'orange-ranunculus', name: 'Persian Buttercup (Orange)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Ranunculus_asiaticus_1.jpg/800px-Ranunculus_asiaticus_1.jpg' },
        { id: 'pink-ranunculus', name: 'Tecolote Pink', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ranunculus_asiaticus_pink.jpg/800px-Ranunculus_asiaticus_pink.jpg' },
        { id: 'yellow-ranunculus', name: 'Yellow Elegance', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ranunculus_asiaticus_yellow.jpg/800px-Ranunculus_asiaticus_yellow.jpg' }
      ]
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryId = params['id'];
      // Fallback to 'roses' if an invalid category is entered in the URL
      this.categoryData = this.categoryDatabase[this.categoryId] || this.categoryDatabase['roses'];
    });
  }
}