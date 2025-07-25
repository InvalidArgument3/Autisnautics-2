//hooking create_sa:grapplin_whisk to/from shipyard coordinates
ItemEvents.firstRightClicked(event => {
    let jsItem = Item.of(event.item)
    
    let targetX = event.player.rayTrace(255).block.getX()//no need to check further than whisk range but I dunno what it is
    if (jsItem.getId() == "create_sa:grapplin_whisk") {
        if ( Math.abs(targetX) > 1000000 ) {
            let newStack = Item.of(event.item.copy())
            let data = newStack.nbt
            data.tagHooked = false
            newStack.setNbt(data)
            
            event.player.drop(newStack, true, true)
            jsItem.setCount(0)
            event.player.tell(Text.red(`Your Grapplin Whisk is repulsed by the ship's Gellar Field and falls out of your hand.`))
        }
    }
})