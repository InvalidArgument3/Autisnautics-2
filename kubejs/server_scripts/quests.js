FTBQuestsEvents.completed("252B9DD5BFB8184A", event => {

    // let runCommand = (cmd) => {
    //     event.server.scheduleInTicks(10, event.server, function (callback) {
    //         callback.data.runCommandSilent(cmd)
    //     })
    // }
    //     let message;
    //     let refund = false;

    //     if (event.player.level.dimension = 'minecraft:nether') {
    //         let structureName = Platform.isLoaded("betterfortresses") ? "betterfortresses:fortress" : "fortress";
    //         let playerLevel = event.player.getLevel().getDimension().getPath();

    //         let structure = TagKey.create(Registry.CONFIGURED_STRUCTURE_FEATURE_REGISTRY, structureName);
    //         let blockPos = new BlockPos(event.player.getX(), event.player.getY(), event.player.getZ());
    //         let radius = 32;

    //         let position = playerLevel.findNearestMapFeature(structure, blockPos, radius, false);

    //         if (blockPos) {
    //             message = `A Fortress was found at ${position.x} ${position.z}.`;

    //         } else {
    //             message = "No fortress could be found. Your gold has been refunded.";
    //             refund = true;
    //         }
    //     } else {
    //         message = "The Locator cannot be used here. Your gold has been refunded.";
    //         refund = true;
    //     }

    //     event.server.scheduleInTicks(10, event.server, function (callback) {
    //         if (refund) {
    //             event.player.give(Item.of("thermal:gold_coin", 2))
    //         }
    //         callback.data.runCommand(`/tell ${event.player.name.text} ${message}`)
    //     })

})
