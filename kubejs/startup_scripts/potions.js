// Morejs is installed to add this recipe
MoreJSEvents.registerPotionBrewing((event) => {
    event.addPotionBrewing("thermal:blitz_powder", "minecraft:awkward", "minecraft:slow_falling");
    event.removeByPotion(null, "minecraft:phantom_membrane", null);
    event.addPotionBrewing("minecraft:glow_berries", "minecraft:awkward", "kubejs:haste");
    event.addPotionBrewing("minecraft:redstone", "kubejs:haste", "kubejs:long_haste");
    event.addPotionBrewing("minecraft:glowstone_dust", "kubejs:haste", "kubejs:strong_haste");
})
