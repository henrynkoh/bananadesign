# NanoBanana Pro - Quick Start Guide

## 🚀 Get Started in 5 Minutes

This quick reference guide gets you up and running with NanoBanana Pro in minutes. For detailed information, see the full User Manual or Tutorial.

---

## ⚡ Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure API Token
Create `.env.local`:
```env
REPLICATE_API_TOKEN=your_token_here
```

### 3. Start Server
```bash
npm run dev
```

### 4. Open Browser
Navigate to: `http://localhost:3000`

---

## 📋 Essential Workflow

### Step 1: Upload Floor Plan
- Drag & drop image OR click to browse
- Supported: PNG, JPG, JPEG, WEBP
- Max size: 10MB (1-5MB optimal)

### Step 2: Write Prompt
- Click suggested style OR type custom
- Be specific: style + colors + materials
- Example: "Modern minimalist with white walls and light wood"

### Step 3: Generate
- Click Send or press Enter
- Wait 30-60 seconds
- View result automatically

### Step 4: Download
- Hover over image
- Click download button
- File saves as `interior-design-1.png`

---

## 💡 Quick Tips

### Best Prompts
✅ **Good**: "Modern Scandinavian living room with white walls, light oak floors, gray sofa, and natural light"
❌ **Bad**: "Nice room"

### Prompt Structure
```
[STYLE] + [COLORS] + [MATERIALS] + [FURNITURE] + [LIGHTING] + [MOOD]
```

### Style Keywords
- Modern, Minimalist, Scandinavian
- Traditional, Contemporary, Industrial
- Luxury, Cozy, Bright, Warm

### Material Keywords
- Marble, Wood, Metal, Glass
- Concrete, Brick, Tile, Fabric

---

## 🎯 Common Use Cases

### Quick Style Test
1. Upload floor plan
2. Click "Modern minimalist" suggestion
3. Generate
4. Done in 60 seconds

### Client Presentation
1. Upload floor plan
2. Generate 3-5 style variations
3. Download all
4. Present options

### Style Exploration
1. Same floor plan
2. Different prompts each time
3. Compare results
4. Find favorite

---

## 🔧 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Upload fails | Check format (PNG/JPG/WEBP), size under 10MB |
| Generation fails | Check API token, internet connection |
| Results poor | Write more detailed prompt, try again |
| Images don't show | Refresh page, check browser console |

---

## 📝 Prompt Templates

### Modern Minimalist
```
Modern minimalist [ROOM] with [COLORS], clean lines, and natural light
```

### Cozy Scandinavian
```
Cozy Scandinavian [ROOM] with white walls, light wood, and warm lighting
```

### Luxury Contemporary
```
Luxury contemporary [ROOM] with [MATERIALS], [COLORS], and sophisticated finishes
```

### Industrial Loft
```
Industrial loft [ROOM] with exposed brick, metal fixtures, and concrete floors
```

---

## 🎨 Style Quick Reference

| Style | Colors | Materials | Mood |
|-------|--------|-----------|------|
| Modern | Neutrals, blacks | Metal, glass, wood | Clean, sleek |
| Scandinavian | Whites, light woods | Natural wood, textiles | Cozy, bright |
| Luxury | Deep colors, gold | Marble, velvet, gold | Sophisticated |
| Industrial | Grays, blacks | Brick, metal, concrete | Urban, edgy |
| Traditional | Warm tones | Wood, fabric | Classic, comfortable |

---

## ⚙️ Quick Configuration

### Environment Variables
```env
# Required
REPLICATE_API_TOKEN=your_token

# Optional
NEXT_PUBLIC_APP_NAME=NanoBanana Pro
```

### Customization
- Styles: Edit `tailwind.config.ts`
- API: Modify `app/api/generate/route.ts`
- Components: Edit files in `/components`

---

## 📚 Quick Links

- **Full Manual**: See `USER_MANUAL.md`
- **Tutorial**: See `TUTORIAL.md`
- **README**: See `README.md`
- **API Docs**: [replicate.com/docs](https://replicate.com/docs)

---

## 🎯 Pro Tips

1. **Be Specific**: More detail = better results
2. **Iterate**: First try rarely perfect, refine and regenerate
3. **Compare**: Generate multiple variations to find best
4. **Organize**: Name downloads descriptively
5. **Learn**: Each generation teaches you something

---

## 🚨 Common Mistakes

❌ **Too Vague**: "Nice room"
✅ **Specific**: "Modern living room with white walls and light wood"

❌ **Conflicting Styles**: "Modern traditional industrial"
✅ **Coherent**: "Modern with traditional accents"

❌ **One Try**: Generate once and give up
✅ **Iterate**: Refine and regenerate

---

## 📞 Quick Support

- **Issues**: Check browser console
- **API Problems**: Verify token at replicate.com
- **Quality Issues**: Improve prompt specificity
- **Upload Issues**: Check file format and size

---

## ✅ Quick Checklist

Before generating:
- [ ] Floor plan uploaded
- [ ] Image is clear and readable
- [ ] Prompt is specific and detailed
- [ ] Internet connection stable
- [ ] API token configured

After generating:
- [ ] Review result quality
- [ ] Download if satisfied
- [ ] Note what worked
- [ ] Refine if needed
- [ ] Generate again if desired

---

## 🎓 Learning Path

1. **Start**: Use suggested prompts
2. **Explore**: Try different styles
3. **Customize**: Write your own prompts
4. **Refine**: Iterate and improve
5. **Master**: Develop your style

---

**Quick Start Version**: 1.0
**For detailed guides, see USER_MANUAL.md and TUTORIAL.md**

