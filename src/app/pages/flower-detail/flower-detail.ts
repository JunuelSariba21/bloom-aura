import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flower-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './flower-detail.html',
  styleUrl: './flower-detail.css',
})
export class FlowerDetailComponent implements OnInit {
  flowerId = '';
  flowerData: any;

  // The Master Database for all individual flowers
  flowerDatabase: any = {
    // -----------------------------------------
    // THE ROSE COLLECTION
    // -----------------------------------------
    'red-rose': {
      categoryId: 'roses',
      name: 'Red Rose',
      subtitle: 'Rosa Kerria · The Eternal Symbol',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Rosa_rubiginosa_1.jpg/1920px-Rosa_rubiginosa_1.jpg',
      description: 'The Red Rose is the ultimate botanical expression of love, passion, and deep longing. It conveys a clear message of affection and unwavering courage.',
      scientificName: 'Rosa gallica',
      origin: 'Europe & Asia',
      season: 'Summer to Autumn',
      height: '3–5 ft',
      meanings: [
        { title: 'A Single Bloom', text: 'Love at first sight.' },
        { title: 'Deep Crimson', text: 'Profound love and commitment.' },
        { title: 'Thorns Included', text: 'Love requires protection and resilience.' }
      ]
    },
    'white-rose': {
      categoryId: 'roses',
      name: 'White Rose',
      subtitle: 'Rosa Alba · The Purest Bloom',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Rosa_alba_%27Maxima%27_01.jpg/1920px-Rosa_alba_%27Maxima%27_01.jpg',
      description: 'The White Rose represents purity, innocence, and youthfulness. Historically associated with new beginnings, it is the classic symbol of bridal grace.',
      scientificName: 'Rosa alba',
      origin: 'Europe',
      season: 'Spring to Summer',
      height: '4–6 ft',
      meanings: [
        { title: 'Bridal White', text: 'New beginnings and pure intentions.' },
        { title: 'A Dozen White', text: 'Absolute purity of heart.' },
        { title: 'Paired with Red', text: 'Unity and unbreakable bonds.' }
      ]
    },
    'yellow-rose': {
      categoryId: 'roses',
      name: 'Yellow Rose',
      subtitle: 'Rosa Hemisphaerica · The Joyful Sun',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Rosa_%27Arthur_Bell%27.jpg/1920px-Rosa_%27Arthur_Bell%27.jpg',
      description: 'Bright and cheerful, the Yellow Rose is the ultimate symbol of friendship, joy, and caring. Unlike other roses, it carries no romantic undertones.',
      scientificName: 'Rosa hemisphaerica',
      origin: 'Middle East',
      season: 'Summer',
      height: '3–4 ft',
      meanings: [
        { title: 'Given to a Friend', text: 'Platonic love and deep friendship.' },
        { title: 'A Dozen Yellow', text: 'Welcome back or congratulations.' }
      ]
    },
    'pink-rose': {
      categoryId: 'roses',
      name: 'Pink Rose',
      subtitle: 'Rosa Centifolia · The Graceful Whisper',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Rosa_%27Queen_Elizabeth%27.jpg/1920px-Rosa_%27Queen_Elizabeth%27.jpg',
      description: 'Pink roses symbolize grace, admiration, and elegance. They are often given as a token of appreciation or gentle, poetic romance.',
      scientificName: 'Rosa centifolia',
      origin: 'Netherlands',
      season: 'Late Spring to Summer',
      height: '4–5 ft',
      meanings: [
        { title: 'Deep Pink', text: 'Gratitude and appreciation.' },
        { title: 'Light Pink', text: 'Gentleness, joy, and sweet admiration.' }
      ]
    },
    'lavender-rose': {
      categoryId: 'roses',
      name: 'Lavender Rose',
      subtitle: 'Rosa Mystica · The Enchanted Bloom',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Rosa_%27Blue_Moon%27_20110620.jpg/1920px-Rosa_%27Blue_Moon%27_20110620.jpg',
      description: 'The Lavender Rose is a striking symbol of enchantment, majesty, and love at first sight. Its rare color gives it an air of mystery and royalty.',
      scientificName: 'Rosa hybrida',
      origin: 'Cultivated Globally',
      season: 'Summer',
      height: '3–4 ft',
      meanings: [
        { title: 'Pale Lavender', text: 'Enchantment and love at first sight.' },
        { title: 'Deep Violet', text: 'Majesty, royalty, and grandeur.' }
      ]
    },

    // -----------------------------------------
    // THE LILY COLLECTION
    // -----------------------------------------
    'white-lily': {
      categoryId: 'lilies',
      name: 'Madonna Lily',
      subtitle: 'Lilium Candidum · The Majestic Rebirth',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Lilium_candidum_1.jpg/1920px-Lilium_candidum_1.jpg',
      description: 'The Madonna Lily is an ancient symbol of purity, rebirth, and majesty. It is often associated with royalty and the restoration of innocence.',
      scientificName: 'Lilium candidum',
      origin: 'Balkans & Middle East',
      season: 'Summer',
      height: '3–5 ft',
      meanings: [
        { title: 'Bridal Lily', text: 'Commitment and pure love.' },
        { title: 'Given in Sympathy', text: 'Restoration of peace to the soul.' }
      ]
    },
    'stargazer-lily': {
      categoryId: 'lilies',
      name: 'Stargazer Lily',
      subtitle: 'Lilium Orientalis · The Bold Dreamer',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Stargazer_Lily_Macro_1.jpg/1920px-Stargazer_Lily_Macro_1.jpg',
      description: 'Known for their striking pink petals and intense fragrance, Stargazer lilies symbolize ambition, wealth, and moving toward fulfillment.',
      scientificName: 'Lilium orientalis',
      origin: 'Hybrid (Created 1974)',
      season: 'Mid to Late Summer',
      height: '3–4 ft',
      meanings: [
        { title: 'Vibrant Pink', text: 'Romance, wealth, and prosperity.' },
        { title: 'Upward Facing', text: 'Looking toward heaven; limitless ambition.' }
      ]
    },
    'tiger-lily': {
      categoryId: 'lilies',
      name: 'Tiger Lily',
      subtitle: 'Lilium Lancifolium · The Confident Flame',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Lilium_lancifolium_1.jpg/1920px-Lilium_lancifolium_1.jpg',
      description: 'Covered in dark spots on bright orange petals, the Tiger Lily represents confidence, pride, and wealth. It is a symbol of fiery passion.',
      scientificName: 'Lilium lancifolium',
      origin: 'China, Japan, Korea',
      season: 'Mid-Summer',
      height: '3–4 ft',
      meanings: [
        { title: 'Orange Petals', text: 'Confidence, energy, and enthusiasm.' },
        { title: 'Dark Spots', text: 'Wealth and the coins of prosperity.' }
      ]
    },

    // -----------------------------------------
    // THE SUNFLOWER COLLECTION
    // -----------------------------------------
    'common-sunflower': {
      categoryId: 'sunflowers',
      name: 'Common Sunflower',
      subtitle: 'Helianthus Annuus · The Loyal Follower',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/A_sunflower.jpg/1920px-A_sunflower.jpg',
      description: 'The Common Sunflower turns its heavy head to follow the sun. It is the ultimate symbol of unwavering faith, unconditional love, and bright adoration.',
      scientificName: 'Helianthus annuus',
      origin: 'North America',
      season: 'Summer to Early Autumn',
      height: '5–10 ft',
      meanings: [
        { title: 'Given to a Partner', text: 'Loyalty and longevity in love.' },
        { title: 'Given to a Friend', text: 'Pure, platonic joy and warmth.' }
      ]
    },
    'red-sunflower': {
      categoryId: 'sunflowers',
      name: 'Velvet Queen',
      subtitle: 'Helianthus Annuus · The Deep Ruby',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Red_sunflower.jpg/1920px-Red_sunflower.jpg',
      description: 'Featuring rich, velvety mahogany petals, the red sunflower brings a moody, passionate twist to the traditional symbol of joy.',
      scientificName: 'Helianthus annuus cultivar',
      origin: 'Cultivated',
      season: 'Late Summer',
      height: '4–6 ft',
      meanings: [
        { title: 'Dark Red Petals', text: 'Deep passion and inner strength.' },
        { title: 'Golden Center', text: 'Hidden joy and resilience.' }
      ]
    },
    'dwarf-sunflower': {
      categoryId: 'sunflowers',
      name: 'Teddy Bear Sunflower',
      subtitle: 'Helianthus Annuus · The Golden Fluff',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Helianthus_annuus_%27Teddy_Bear%27_01.jpg/1920px-Helianthus_annuus_%27Teddy_Bear%27_01.jpg',
      description: 'Unlike its towering cousins, the Teddy Bear sunflower is short and bushy, producing deeply double, fluffy blooms that look like golden pom-poms.',
      scientificName: 'Helianthus annuus dwarf',
      origin: 'Cultivated',
      season: 'Summer',
      height: '2–3 ft',
      meanings: [
        { title: 'Fluffy Blooms', text: 'Cheerfulness and comfort.' },
        { title: 'Small Stature', text: 'A concentrated bundle of joy.' }
      ]
    },

    // -----------------------------------------
    // THE HYDRANGEA COLLECTION
    // -----------------------------------------
    'blue-hydrangea': {
      categoryId: 'hydrangeas',
      name: 'Blue Mophead',
      subtitle: 'Hydrangea Macrophylla · The Apologetic Heart',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Hydrangea_macrophylla_%27Nikko_Blue%27_1.jpg/1920px-Hydrangea_macrophylla_%27Nikko_Blue%27_1.jpg',
      description: 'Growing in acidic soil, the Blue Hydrangea is a deeply traditional symbol of apology, regret, and profound gratitude.',
      scientificName: 'Hydrangea macrophylla',
      origin: 'Japan',
      season: 'Summer',
      height: '3–6 ft',
      meanings: [
        { title: 'Deep Blue', text: 'A sincere apology or deep regret.' },
        { title: 'Given as a Gift', text: 'Thank you for understanding.' }
      ]
    },
    'pink-hydrangea': {
      categoryId: 'hydrangeas',
      name: 'Pink Lacecap',
      subtitle: 'Hydrangea Macrophylla · The Beating Heart',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Hydrangea_macrophylla_%28Pink%29.jpg/1920px-Hydrangea_macrophylla_%28Pink%29.jpg',
      description: 'Flourishing in alkaline soil, the Pink Hydrangea symbolizes genuine emotion, romance, and true feelings.',
      scientificName: 'Hydrangea macrophylla',
      origin: 'Japan',
      season: 'Summer',
      height: '3–6 ft',
      meanings: [
        { title: 'Heart-Shaped Petals', text: 'Sincere and true romantic emotion.' },
        { title: 'Bright Pink', text: 'Joyful love and weddings.' }
      ]
    },
    'white-hydrangea': {
      categoryId: 'hydrangeas',
      name: 'White Panicle',
      subtitle: 'Hydrangea Paniculata · The Boastful Bloom',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Hydrangea_paniculata_%27Grandiflora%27.jpg/1920px-Hydrangea_paniculata_%27Grandiflora%27.jpg',
      description: 'White hydrangeas symbolize purity and grace, but historically were also associated with boasting or vanity due to their abundance of showy petals.',
      scientificName: 'Hydrangea paniculata',
      origin: 'Eastern Asia',
      season: 'Late Summer to Autumn',
      height: '8–15 ft',
      meanings: [
        { title: 'Pure White', text: 'Grace, purity, and abundance.' },
        { title: 'Victorian Meaning', text: 'Boastfulness and vanity.' }
      ]
    },

    // -----------------------------------------
    // THE ORCHID COLLECTION
    // -----------------------------------------
    'phalaenopsis-orchid': {
      categoryId: 'orchids',
      name: 'Moth Orchid',
      subtitle: 'Phalaenopsis · The Elegant Butterfly',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Phalaenopsis_amabilis_orchid.jpg/1920px-Phalaenopsis_amabilis_orchid.jpg',
      description: 'The Phalaenopsis, or Moth Orchid, is renowned for its long-lasting, flat blooms that resemble flight. It is the ultimate symbol of elegance and health.',
      scientificName: 'Phalaenopsis',
      origin: 'Southeast Asia',
      season: 'Late Winter to Spring',
      height: '1–3 ft',
      meanings: [
        { title: 'White Moth', text: 'Innocence, beauty, and elegance.' },
        { title: 'Pink Moth', text: 'Femininity, grace, and joy.' }
      ]
    },
    'cattleya-orchid': {
      categoryId: 'orchids',
      name: 'Corsage Orchid',
      subtitle: 'Cattleya · The Queen of Orchids',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Cattleya_labiata_1.jpg/1920px-Cattleya_labiata_1.jpg',
      description: 'Famous for being worn as a corsage in the mid-20th century, the Cattleya is large, fragrant, and deeply symbolic of mature charm.',
      scientificName: 'Cattleya',
      origin: 'Central and South America',
      season: 'Varies',
      height: '1–2 ft',
      meanings: [
        { title: 'As a Gift', text: 'Mature charm and deep respect.' },
        { title: 'Worn as Corsage', text: 'Celebration and high society.' }
      ]
    },
    'cymbidium-orchid': {
      categoryId: 'orchids',
      name: 'Boat Orchid',
      subtitle: 'Cymbidium · The Virtuous Bloom',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Cymbidium_hybrid_1.jpg/1920px-Cymbidium_hybrid_1.jpg',
      description: 'In ancient Asian cultures, the Cymbidium orchid was considered a symbol of morality, virtue, and highly respected friendship.',
      scientificName: 'Cymbidium',
      origin: 'Himalayas & East Asia',
      season: 'Winter to Spring',
      height: '2–3 ft',
      meanings: [
        { title: 'Given to a Scholar', text: 'Respect for virtue and intellect.' },
        { title: 'Yellow Boat', text: 'Valued and highly respected friendship.' }
      ]
    },

    // -----------------------------------------
    // THE PEONY COLLECTION
    // -----------------------------------------
    'pink-peony': {
      categoryId: 'peonies',
      name: 'Sarah Bernhardt',
      subtitle: 'Paeonia Lactiflora · The Romantic Fortune',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Paeonia_lactiflora_02.jpg/1920px-Paeonia_lactiflora_02.jpg',
      description: 'Pink Peonies are the most common and romantic variety, deeply tied to concepts of a happy marriage, prosperity, and good fortune.',
      scientificName: 'Paeonia lactiflora',
      origin: 'Asia',
      season: 'Late Spring to Early Summer',
      height: '2–3 ft',
      meanings: [
        { title: 'Light Pink', text: 'Romance and a happy marriage.' },
        { title: 'A Full Bouquet', text: 'Great fortune and impending prosperity.' }
      ]
    },
    'white-peony': {
      categoryId: 'peonies',
      name: 'Festiva Maxima',
      subtitle: 'Paeonia Lactiflora · The Bashful Bloom',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Paeonia_lactiflora_%27Festiva_Maxima%27_01.jpg/1920px-Paeonia_lactiflora_%27Festiva_Maxima%27_01.jpg',
      description: 'White Peonies are stunning and fragrant, but interestingly, in Victorian floriography, they represented bashfulness or a sincere apology.',
      scientificName: 'Paeonia lactiflora',
      origin: 'Asia',
      season: 'Late Spring',
      height: '2–3 ft',
      meanings: [
        { title: 'Pure White', text: 'Bashfulness or feeling shy.' },
        { title: 'Given after an argument', text: 'A deep and sincere apology.' }
      ]
    },
    'red-peony': {
      categoryId: 'peonies',
      name: 'Red Charm',
      subtitle: 'Paeonia Officinalis · The Honorable King',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Paeonia_officinalis_1.jpg/1920px-Paeonia_officinalis_1.jpg',
      description: 'Known as the "King of Flowers" in traditional Chinese culture, the Red Peony is an incredibly potent symbol of honor, respect, and high social class.',
      scientificName: 'Paeonia officinalis',
      origin: 'Europe',
      season: 'Spring',
      height: '2 ft',
      meanings: [
        { title: 'Deep Red', text: 'Respect, honor, and wealth.' },
        { title: 'Given to Elders', text: 'Wishes for a long, prosperous life.' }
      ]
    },

    // -----------------------------------------
    // THE RANUNCULUS COLLECTION
    // -----------------------------------------
    'orange-ranunculus': {
      categoryId: 'ranunculus',
      name: 'Persian Buttercup',
      subtitle: 'Ranunculus Asiaticus · The Vibrant Spark',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Ranunculus_asiaticus_1.jpg/1920px-Ranunculus_asiaticus_1.jpg',
      description: 'The Orange Ranunculus symbolizes radiant charm and immense energy. Giving this flower tells the recipient that you find them dazzlingly attractive.',
      scientificName: 'Ranunculus asiaticus',
      origin: 'Eastern Mediterranean',
      season: 'Spring',
      height: '1–2 ft',
      meanings: [
        { title: 'Bright Orange', text: 'Vibrant energy and strong attraction.' },
        { title: 'A Single Stem', text: '"You are charming."' }
      ]
    },
    'pink-ranunculus': {
      categoryId: 'ranunculus',
      name: 'Tecolote Pink',
      subtitle: 'Ranunculus Asiaticus · The Poetic Whisper',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ranunculus_asiaticus_pink.jpg/1920px-Ranunculus_asiaticus_pink.jpg',
      description: 'Featuring layers of paper-thin, delicate petals, the Pink Ranunculus conveys gentle charm, grace, and poetic admiration.',
      scientificName: 'Ranunculus asiaticus',
      origin: 'Eastern Mediterranean',
      season: 'Spring',
      height: '1–2 ft',
      meanings: [
        { title: 'Soft Pink', text: 'Gentle charm and romantic interest.' },
        { title: 'Given to a Crush', text: 'A subtle expression of admiration.' }
      ]
    },
    'yellow-ranunculus': {
      categoryId: 'ranunculus',
      name: 'Yellow Elegance',
      subtitle: 'Ranunculus Asiaticus · The Joyful Layers',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ranunculus_asiaticus_yellow.jpg/1920px-Ranunculus_asiaticus_yellow.jpg',
      description: 'The Yellow Ranunculus represents pure joy, happiness, and positivity. Its endless layers of bright petals bring sunshine to any arrangement.',
      scientificName: 'Ranunculus asiaticus',
      origin: 'Eastern Mediterranean',
      season: 'Spring',
      height: '1–2 ft',
      meanings: [
        { title: 'Bright Yellow', text: 'Joy, happiness, and positive energy.' },
        { title: 'Given to a Friend', text: 'Wishing you a bright day.' }
      ]
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.flowerId = params['id'];
      
      // Fetch the data from the database. Default to red-rose if the ID is missing.
      this.flowerData = this.flowerDatabase[this.flowerId] || this.flowerDatabase['red-rose'];
    });
  }
}