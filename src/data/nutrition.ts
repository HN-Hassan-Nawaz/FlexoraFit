import { MealPlan, NutritionTip } from '../types';

export const mealPlans: MealPlan[] = [
  {
    id: 'meal-loss',
    title: 'Metabolic Fat Loss Plan',
    goal: 'Active Fat Burning & Lean Muscle Support',
    description: 'A caloric-deficit meal guide centering around high satiety whole foods, fibrous greens, lean protein sources, and healthy monounsaturated fats.',
    meals: {
      breakfast: 'Egg White Omelet with spinach, red peppers, half an avocado, and 1 slice of gluten-free Ezekiel toast.',
      lunch: 'Seared Chicken Breast (200g) over a bed of mixed organic kale, cherry tomatoes, cucumbers, drizzled with olive oil & lemon juice.',
      snack: 'One scoop of Whey Protein Isolate mixed in water or unsweetened almond milk, alongside 30g of raw almonds.',
      dinner: 'Baked Wild-Caught Salmon Fillet (180g) served with steamed asparagus spears and 120g of roasted sweet potato cubes.'
    },
    macros: {
      protein: '150g',
      carbs: '110g',
      fats: '55g',
      calories: '1,550 kcal'
    }
  },
  {
    id: 'meal-gain',
    title: 'Hypertrophy Mass Gainer',
    goal: 'Muscle Growth, Heavy Recovery & Strength Fuel',
    description: 'A caloric-surplus fuel schedule focused heavily on complex carbohydrates, glycogen replenishment, high protein, and optimal fats for hormonal health.',
    meals: {
      breakfast: 'Loaded Oatmeal: 80g rolled oats cooked in milk, 1 sliced banana, 2 tbsp natural peanut butter, 1 scoop vanilla whey, and chia seeds.',
      lunch: 'Lean Ground Beef (220g, 93% lean) cooked with garlic, mixed with 200g of cooked Jasmine white rice and dynamic roasted broccoli.',
      snack: 'Whole-grain wrap stuffed with sliced smoked turkey breast (150g), baby spinach, tomato, and hummus spread.',
      dinner: 'Pan-Seared Sirloin Steak (200g) alongside 250g of baked red potatoes and a side of sautéed green beans in grass-fed butter.'
    },
    macros: {
      protein: '190g',
      carbs: '320g',
      fats: '85g',
      calories: '2,800 kcal'
    }
  },
  {
    id: 'meal-balanced',
    title: 'Sustained Athletic Energy',
    goal: 'Daily Vitality, Steady Hormones & Core Performance',
    description: 'Designed for active individuals seeking weight maintenance, natural thyroid balance, stamina, and continuous cognitive focus.',
    meals: {
      breakfast: 'Greek Yogurt Bowl: 200g unsweetened grass-fed Greek yogurt, mixed berries, 30g organic granola, and a drizzle of raw manuka honey.',
      lunch: 'Baked cod fillets or turkey meatballs, 150g cooked quinoa, and a giant rainbow salad with chopped carrots, bell peppers, and walnuts.',
      snack: '2 hard-boiled pasture-raised eggs paired with a small apple or organic pear.',
      dinner: 'Stir-fried tofu or chicken strips (180g) with mixed bell peppers, snap peas, zucchini, and baby corn over brown rice.'
    },
    macros: {
      protein: '140g',
      carbs: '200g',
      fats: '70g',
      calories: '2,000 kcal'
    }
  }
];

export const nutritionTips: NutritionTip[] = [
  {
    id: 'tip-1',
    title: 'The Golden Protein Rule',
    description: 'Aim for 0.8g to 1.0g of protein per pound of bodyweight daily if you are resistance training. Spread this across 3-5 meals to maximize muscle protein synthesis trigger rates.',
    category: 'Protein'
  },
  {
    id: 'tip-2',
    title: 'Calculated Hydration Loops',
    description: 'Drink approximately 35ml of clean water per kilogram of bodyweight. Add an extra 500-1000ml for every hour of heavy, sweat-inducing workout. Electrolytes (sodium, potassium, magnesium) are key!',
    category: 'Hydration'
  },
  {
    id: 'tip-3',
    title: 'Post-Workout Glycogen Replenishment',
    description: 'Ingesting fast-digesting carbohydrates along with amino acids within 45 minutes of heavy weight training expedites insulin response, driving vital building blocks directly into muscle spindles.',
    category: 'Recovery'
  },
  {
    id: 'tip-4',
    title: 'Fiber Satiety Mechanics',
    description: 'When operating in calorie restriction for fat loss, aim for 30-40g of fiber. It slows gastrin-emptying rates, regulates thyroid levels, stabilizes blood sugars, and keeps you feeling fuller for longer.',
    category: 'Fat Loss'
  }
];
