if(Platform.isLoaded("aquaculture")) {
    unregistered_axes.push("aquaculture:neptunium_axe")

    ServerEvents.recipes(event => {
        event.recipes.create.crushing([Item.of(Item.of("aquaculture:neptunium_ingot", 2)), Item.of(Item.of("aquaculture:neptunium_nugget", 5)).withChance(.5)], "aquaculture:neptunes_bounty").processingTime(500)
    })
}
