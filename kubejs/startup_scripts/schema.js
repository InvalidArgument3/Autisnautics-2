const RecipeSchema = Java.loadClass("dev.latvian.mods.kubejs.recipe.schema.RecipeSchema");

StartupEvents.recipeSchemaRegistry(event => {
    // Kubejs Thermal does some weird stuff that makes it impossible to create certain thermal recipes (like arboreal extractor recipes)

    // We can stop kubejs thermal from mangling with tree extractor recipes by overwriting the tree extractor recipe schema with a blank one
    event.register("thermal:tree_extractor", new RecipeSchema());
});
