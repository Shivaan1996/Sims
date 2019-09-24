//---PIPETTE-------------------------------------------:
//Create pipette instance
export const createPipette = (data) => {
    //data = {id, type}
    return { type: "CREATE_PIPETTE", payload: data }
}

//Increases volume by some amount
export const incVol = (data) => {
    //data = {id}
    return { type: "INC_VOL", payload: data}
}

//Decreases volume by some amount
export const decVol = (data) => {
    //data = {id}
    return { type: "DEC_VOL", payload: data}

}

//Set volume by some amount
export const setVol = (data) => {
    //data = {id, volume}
    return { type: "SET_PIPETTE_VOL", payload: data}
}

//Change tip attached status
export const setTipAttached = (data) => {
    //data = {id, attached}
    return { type: "SET_TIP_ATTACHED", payload: data}
}

//Change tip used status
export const setTipUsed = (data) => {
    //data = {id, used}
    return { type: "SET_TIP_USED", payload: data}
}

//Set solution in current tip
export const setPipetteSolution = (data) => {
    //data = {id, solution}
    return { type: "SET_PIPETTE_SOLUTION", payload: data}
}

//Set if pipette controls are visible or not
export const setHeld = (data) => {
    //data = {id, held}
    return { type: "SET_HELD", payload: data}
}

//Set if pipette plunger is being depressed or not
export const setAnimatingOut = (data) => {
    //data = {id, animatingOut}
    return { type: "SET_PIPETTE_ANIMATING_OUT", payload: data}
}

//Set whether the pipette controls are displayed or not
export const setControlVisibility = (data) => {
    //data = {id, animatingOut}
    return { type: "SET_PIPETTE_CONTROLS_VISIBLE", payload: data}
}

//Set the current pipette plunger state
export const setPlungerPosition = (data) => {
    //data = {id, currentPlunger}
    return { type: "SET_PIPETTE_PLUNGER_POSITION", payload: data}
}

//Set the current pipette plunger position in px
export const setCurrentPlungerPos = (data) => {
    //data = {id, currentPlungerPos}
    return { type: "SET_PIPETTE_CURRENT_PLUNGER_POSITION", payload: data}
}




//---SOLUTION------------------------------------------:
//Creates new solution and adds to array of solutions
export const createSolution = (data) => {
    //data = {id, solution}
    return { type: "CREATE_SOLUTION", payload: data}
}

//set solution of solution obj with specific id
export const setSolution = (data) => {
    //data = {id, solution}
    return { type: "SET_SOLUTION", payload: data}
}

//Change lid open status of solution with specific id
export const solutionOpen = (data) => {
    //data = {id, open}
    return { type: "SOLUTION_OPEN", payload: data}
}

//set solution of solution obj with specific id
export const incSolution = (data) => {
    //data = {id, solution}
    return { type: "INC_SOLUTION", payload: data}
}

//Change lid open status of solution with specific id
export const decSolution = (data) => {
    //data = {id, open}
    return { type: "DEC_SOLUTION", payload: data}
}

//Hide solution when dragged over to microcentrifuge with specific id
export const setSolutionInScene = (data) => {
    //data = {id, inScene}
    return { type: "SET_SOLUTION_IN_SCENE", payload: data}
}

//Determine if solution is on rack
export const setSolutionOnRack = (data) => {
    //data = {id, inScene}
    return { type: "SET_SOLUTION_ON_RACK", payload: data}
}

export const setSolutionHeld = (data) => {
    //data = {id, inScene}
    return { type: "SET_SOLUTION_HELD", payload: data}
}

export const setSolutionHomogenized = (data) => {
    //data = {id, homogenized}
    return { type: "SET_SOLUTION_HOMOGENIZED", payload: data}
}






//---flask------------------------------------------:
export const createFlask = (data) => {
    //data = {id, solution}
    return { type: "CREATE_FLASK", payload: data}
}

export const setFlask = (data) => {
    //data = {id, solution}
    return { type: "SET_FLASK", payload: data}
}

export const incFlask = (data) => {
    //data = {id, solution}
    return { type: "INC_FLASK", payload: data}
}

export const decFlask = (data) => {
    //data = {id, open}
    return { type: "DEC_FLASK", payload: data}
}

export const isPouring = (data) => {
    //data = {id, pour}
    return { type: "SET_FLASK_POUR", payload: data}
}

export const setFlaskHeld = (data) => {
    //data = {id, held}
    return { type: "SET_FLASK_HELD", payload: data}
}






//---GEL------------------------------------------:
export const createGel = (data) => {
    //data = {id, description, type}
    return { type: "CREATE_GEL", payload: data}
}

export const setGel = (data) => {
    //data = {type, concentration, description}
    return { type: "SET_GEL", payload: data}
}

export const setGelLane = (data) => {
    //data = {id, laneNumber, laneData}
    return { type: "SET_GEL_LANE", payload: data}
}

export const makeGelImgConfig = (data) => {
    //data = {id}
    return { type: "MAKE_GEL_IMG_CONFIG", payload: data}
}

export const setGelInScene = (data) => {
    //data = {type, inScene}
    return { type: "SET_GEL_IN_SCENE", payload: data}
}

export const setGelHeld = (data) => {
    //data = {id, held}
    return { type: "SET_GEL_HELD", payload: data}
}

export const setGelPrediction = (data) => {
    //data = {id, held}
    return { type: "SET_GEL_PREDICTION", payload: data}
}

export const setGelResult = (data) => {
    //data = {id, held}
    return { type: "SET_GEL_RESULT", payload: data}
}





//---GEL BOX------------------------------------------:

//Create gel box instance
export const createGelBox = (data) => {
    //data = {id, type}
    return { type: "CREATE_GEL_BOX", payload: data }
}

export const setGelBox = (data) => {
    //data = {...}
    return { type: "SET_GEL_BOX", payload: data}
}

export const setGelInBox= (data) => {
    //data = {id, containsGel}
    return { type: "SET_GEL_IN_BOX", payload: data}
}

export const setSolutionInGelBox= (data) => {
    //data = {id, containsGel}
    return { type: "SET_SOLUTION_IN_GEL_BOX", payload: data}
}

export const setGelOrientation = (data) => {
    //data =  {id, gelOrientation}
    return { type: "SET_GEL_ORIENTATION", payload: data}
}

export const incGelOrientation = (data) => {
    //data =  {id, gelOrientation}
    return { type: "INC_GEL_ORIENTATION", payload: data}
}

export const decGelOrientation = (data) => {
    //data =  {id, gelOrientation}
    return { type: "DEC_GEL_ORIENTATION", payload: data}
}

export const setGelBoxTimer = (data) => {
    //data = {id, timer}
    return { type: "SET_GEL_BOX_TIMER", payload: data}
}

export const setGelBoxActive = (data) => {
    //data = {id, active}
    return { type: "SET_GEL_BOX_ACTIVE", payload: data}
}

export const gelBoxOpen = (data) => {
    //data = {id, cover}
    return { type: "SET_GEL_BOX_OPEN", payload: data}
}

export const setGelBoxAnodeConnected = (data) => {
    //data = {id, anodeConnected}
    return { type: "SET_GEL_BOX_ANODE_CONNECTED", payload: data}
}

export const setGelBoxCathodeConnected = (data) => {
    //data = {id, cathodeConnected}
    return { type: "SET_GEL_BOX_CATHODE_CONNECTED", payload: data}
}






//---POWER SUPPLY------------------------------------------:
// export const setPowerSupplyCurrent = (data) => {
//     //data = {current}
//     return { type: "SET_POWER_SUPPLY_CURRENT", payload: data}
// }

// export const setPowerSupplyActive = (data) => {
//     //data = {active}
//     return { type: "SET_POWER_SUPPLY_ACTIVE", payload: data}
// }

// export const setPowerSupplyVoltage = (data) => {
//     //data = {voltage}
//     return { type: "SET_POWER_SUPPLY_VOLTAGE", payload: data}
// }

export const setPowerSupplyAnodeConnected = (data) => {
    //data = {anodeConnected}
    return { type: "SET_POWER_SUPPLY_ANODE_CONNECTED", payload: data}
}

export const setPowerSupplyCathodeConnected = (data) => {
    //data = {cathodeConnected}
    return { type: "SET_POWER_SUPPLY_CATHODE_CONNECTED", payload: data}
}

export const incPowerSupplyTime = (data) => {
    //data = {cathodeConnected}
    return { type: "INC_POWER_SUPPLY_TIME", payload: data}
}
export const decPowerSupplyTime = (data) => {
    //data = {cathodeConnected}
    return { type: "DEC_POWER_SUPPLY_TIME", payload: data}
}
export const countDownPowerSupplyTime = (data) => {
    //data = {cathodeConnected}
    return { type: "COUNT_DOWN_POWER_SUPPLY_TIME", payload: data}
}
export const resetPowerSupplyTime = (data) => {
    //data = {cathodeConnected}
    alert('made it to action')
    return { type: "RESET_POWER_SUPPLY_TIME", payload: data}
}
export const incPowerSupplyAmp = (data) => {
    //data = {cathodeConnected}
    return { type: "INC_POWER_SUPPLY_AMP", payload: data}
}
export const decPowerSupplyAmp = (data) => {
    //data = {cathodeConnected}
    return { type: "DEC_POWER_SUPPLY_AMP", payload: data}
}
export const incPowerSupplyWatt = (data) => {
    //data = {cathodeConnected}
    return { type: "INC_POWER_SUPPLY_WATT", payload: data}
}
export const decPowerSupplyWatt = (data) => {
    //data = {cathodeConnected}
    return { type: "DEC_POWER_SUPPLY_WATT", payload: data}
}
export const incPowerSupplyVoltage = (data) => {
    //data = {cathodeConnected}
    return { type: "INC_POWER_SUPPLY_VOLTAGE", payload: data}
}
export const decPowerSupplyVoltage = (data) => {
    //data = {cathodeConnected}
    return { type: "DEC_POWER_SUPPLY_VOLTAGE", payload: data}
}
export const togglePowerSupplyPower = (data) => {
    //data = {cathodeConnected}
    return { type: "SET_POWER_SUPPLY_POWER", payload: data}
}
export const togglePowerSupplyStart = (data) => {
    //data = {cathodeConnected}
    return { type: "SET_POWER_SUPPLY_ACTIVE", payload: data}
}

export const setCentrifugeRpm = (data) => {
    //data = {rpm}
    return { type: "SET_CENTRIFUGE_RPM", payload: data}
}

export const setCentrifugeTime = (data) => {
    //data = {time}
    return { type: "SET_CENTRIFUGE_TIME", payload: data}
}





//---POWER SUPPLY LEAD------------------------------------------:
export const setPowerSupplyLeadPostive = (data) => {
    //data = {current}
    return { type: "SET_POSITIVE_POWER_SUPPLY_LEAD_POSITION", payload: data}
}

export const setPowerSupplyLeadNegative = (data) => {
    //data = {current}
    return { type: "SET_NEGATIVE_POWER_SUPPLY_LEAD_POSITION", payload: data}
}

export const setPositiveLeadConnection = (data) => {
    //data = {current}
    return { type: "SET_POSITIVE_POWER_SUPPLY_LEAD_CONNECTION", payload: data}
}

export const setNegativeLeadConnection = (data) => {
    //data = {current}
    return { type: "SET_NEGATIVE_POWER_SUPPLY_LEAD_CONNECTION", payload: data}
}




//---CENTRIFUGE------------------------------------------:
export const setCentrifugeOpen = (data) => {
    //data = {open}
    return { type: "SET_CENTRIFUGE_OPEN", payload: data}
}

export const setCentrifugeSlots = (data) => {
    //data = {slots}
    return { type: "SET_CENTRIFUGE_SLOTS", payload: data}
}

export const setSolutionTubesInCentrifuge = (data) => {
    //data = {slotIndex, slot}
    return { type: "SET_SOLUTION_TUBES", payload: data}
}

//USE THIS for dropping in tubes
//Adds tube into next available slot
export const addTubeToCentrifuge = (data) => {
    //data = {id, solution}
    return { type: "ADD_TUBE_TO_CENTRIFUGE", payload: data }
}

export const moveTubeInCentrifuge = (data) => {
    //data = {currentId, targetId}
    return { type: "MOVE_TUBE_IN_CENTRIFUGE", payload: data }
}

export const countdownCentrifugeTime = (data) => {
    //data = {timeDiff}
    return { type: "COUNTDOWN_CENTRIFUGE_TIME", payload: data }
}

export const centrifugeCountdownActive = (data) => {
    //data = {active}
    return { type: "CENTRIFUGE_COUNTDOWN_ACTIVE", payload: data }
}

export const centrifugeBalanced = (data) => {
    //data = {balanced}
    return { type: "CENTRIFUGE_BALANCED", payload: data }
}





//---BLOTTING PAPER------------------------------------------:
//Create blot paper instance
export const createBlotPaper = (data) => {
    //data = {id}
    return { type: "CREATE_BLOT_PAPER", payload: data}
}

//Deposit to blotting paper
export const depositBlotPaper = (data) => {
    //data = {id, solution, volume}
    return { type: "DEPOSIT_BLOT_PAPER", payload: data }
}

//Increases volume prediction by some amount
export const incPrediction = (data) => {
    //data = {id}
    return { type: "INC_PREDICTION", payload: data}
}

//Decreases volume prediction by some amount
export const decPrediction = (data) => {
    //data = {id}
    return { type: "DEC_PREDICTION", payload: data}
}




//---TIP BOX------------------------------------------:
//Creates new Tip Box and assigns ID and type
export const createTipBox = (data) => {
    //data = {id, type}
    return { type: "CREATE_TIP_BOX", payload: data}
}

//Change tip attached status
export const tipBoxOpen = (data) => {
    //data = {id, open}
    return { type: "TIP_BOX_OPEN", payload: data}
}




//---TRASH---------------------------------------------:
//Change tip attached status
export const trashFull = (full) => {
    return { type: "TRASH_FULL", payload: full}
}

//Moves item to trash and increases trash count
export const trashItem = (item) => {
    return { type: "TRASH_ITEM", payload: item}
}




//---NOTEBOOK------------------------------------------:
//Sets section of Notebook as selected
export const notebookSection = (data) => {
    // data = {id, section}
    return { type: "NOTEBOOK_SECTION", payload: data}
}

//Toggle slider popout open/closed
export const notebookPopout = (open) => {
    return { type: "NOTEBOOK_POPOUT", payload: open}
}

//Increases protocol page by 1
export const incProtocolPage = () => {
    return { type: "INC_PROTOCOL_PAGE", payload: 1}
}

//Decreases protocol page by 1
export const decProtocolPage = () => {
    return { type: "DEC_PROTOCOL_PAGE", payload: 1}
}

//Goes to a specific protocol page
export const goProtocolPage = (page) => {
    return { type: "GO_PROTOCOL_PAGE", payload: page}
}

//Sets total protocol pages
export const setTotalProtocolPages = (total) => {
    return { type: "SET_TOTAL_PROTOCOL_PAGES", payload: total}
}

//Sets task page's top instructions line
export const setPageInstructions = (instructions) => {
    return { type: "SET_PAGE_INSTRUCTIONS", payload: instructions}
}

//Save note to a given task
export const saveTaskNote = (note, page, index) => {
    return { type: "SAVE_TASK_NOTE", payload: {note: note, page: page, index: index} }
}

//Set tasks data on init (Upgrade to API data later)
export const setTaskPages = (taskPages) => {
    return { type: "SET_TASK_PAGES", payload: taskPages}
}

//Set tasks data on init (Upgrade to API data later)
export const setLevel = (data) => {
    //data = {level}
    return { type: "SET_LEVEL", payload: data}
}

//Sets first task in notebook to focused
export const focusFirstTask = () => {
    return { type: "FOCUS_FIRST_TASK", payload: {} }
}

//Sets focused task to completed
export const setTaskCompleted = (data) => {
    //data = {pageIndex, taskIndex}
    return { type: "SET_TASK_COMPLETED", payload: data }
}

//Sets focused task to completed
export const clearLastActions = () => {
    //data = {pageIndex, taskIndex}
    return { type: "CLEAR_LAST_ACTIONS", payload: {} }
}

//Sets focused task to completed
export const clearTempPoints = () => {
    return { type: "CLEAR_TEMP_POINTS", payload: {} }
}

//Sets focused task to completed
export const incTempPoints = () => {
    return { type: "INC_TEMP_POINTS", payload: {} }
}

//Sets toast as fired
export const setToastFired = () => {
    return { type: "SET_TOAST_FIRED", payload: {} }
}

//Set the notes view to be enabled / disabled
export const toggleNotesView = (state) => {
    return { type: "NOTES_VIEW", payload: state}
}

//Toggle notebook expanded state
export const toggleNotebookExpanded = (data) => {
    return { type: "TOGGLE_NOTEBOOK_EXPANDED", payload: data }
}





//---SCENE---------------------------------------------:
//Set value to object held in scene
export const setHeldObject = (object) => {
    return { type: "SET_HELD_OBJECT", payload: object}
}

//Set target list for object for collision detection
export const setTargetList = (targetList) => {
    return { type: "SET_TARGET_LIST", payload: targetList}
}

//Adds interaction functions to single collection in Scene
export const pushInteractions = (interactions) => {
    return { type: "PUSH_INTERACTIONS", payload: interactions}
}
//Records target of last drop for interactions
export const setLastDrop = (data) => {
    //data = {lastHeld, lastTarget}
    return { type: "SET_LAST_DROP", payload: data}
}
//Changes scene scale
export const setSceneScale = (data) => {
    //data = {scale}
    return { type: "SET_SCENE_SCALE", payload: data }
}



//---MULTIPLE CHOICE QUESTION-----------------------------:

//Create multiple choice question instance
export const createMCQ = (data) => {
    //data = {id, type}
    return { type: "CREATE_MCQ", payload: data }
}

//Answer a mutliple choice question
export const setMCQResponse = (data) => {
    //data = {id, solution}
    return { type: "ANSWER_MCQ", payload: data}
}

//Check the answer to a multiple choice question
export const validateMCQ = (data) => {
    //data = {id, solution}
    return { type: "VALIDATE_MCQ", payload: data}
}




//---SINGLE CHOICE QUESTION-----------------------------:

//Create single choice question instance
export const createSCQ = (data) => {
    //data = {id, type}
    return { type: "CREATE_SCQ", payload: data }
}

//Answer a single choice question
export const setSCQResponse = (data) => {
    //data = {id, solution}
    return { type: "ANSWER_SCQ", payload: data}
}

//Check the answer to a single choice question
export const validateSCQ = (data) => {
    //data = {id, solution}
    return { type: "VALIDATE_SCQ", payload: data}
}




//---Modal-----------------------------:

//Update the modal data
export const setModal = (data) => {
    return { type: "SET_MODAL", payload: data }
}

//Display the modal
export const showModal = (data) => {
    return { type: "SHOW_MODAL", payload: data}
}




//---Move Menu-----------------------------:

//Update the move menu data
export const setMoveMenu = (data) => {
    return { type: "SET_MOVEMENU", payload: data }
}

//Display the move menu
export const showMoveMenu = (data) => {
    return { type: "SHOW_MOVEMENU", payload: data}
}
