function toggleElement(elemId, openImageId, closedImageId)
{
  if (elemId == "")
  {
    alert("You must specify an element id to toggle");
    return false;
  }

  var elem = $(""+elemId);
  var openImageElem = $(""+openImageId);
  var closedImageElem = $(""+closedImageId);

  if (elem == null)
  {
    alert("You must specify a valid element to toggle");
    return false;
  }
  if (Element.visible(elem))
  {
    Element.hide(elem);
    if (openImageElem != null && closedImageElem!=null)
    {
      Element.hide(openImageId);
      Element.show(closedImageId);
    }
  }
  else
  {
    Element.show(elem);
    if (openImageElem != null && closedImageElem!=null)
    {
      Element.hide(closedImageId);
      Element.show(openImageId);
    }
  }
  //return false;
}

function toggleElementBlind(elemId, openImageId, closedImageId)
{
  if (elemId == "")
  {
    alert("You must specify an element id to toggle");
    return false;
  }

  var elem = $(""+elemId);
  var openImageElem = $(""+openImageId);
  var closedImageElem = $(""+closedImageId);

  if (elem == null)
  {
    alert("You must specify a valid element to toggle");
    return false;
  }
  if (Element.visible(elem))
  {
    Effect.BlindUp(elem);
    if (openImageElem != null && closedImageElem!=null)
    {
      Element.hide(openImageId);
      Element.show(closedImageId);
    }
  }
  else
  {
    Effect.BlindDown(elem);
    if (openImageElem != null && closedImageElem!=null)
    {
      Element.hide(closedImageId);
      Element.show(openImageId);
    }
  }
  //return false;
}

function showPicNav(show)
{
  if (show)
  {
    Effect.BlindDown('PicNav', {fps: 60});
  }
  else
  {
    Effect.BlindUp('PicNav', {fps: 60});
    Element.hide('PicNavOnImg');
  }
  //return false;
}

function showTask(idToShow, hideAll, openImageId, closedImageId)
{
  if (hideAll)
  {
  // First hide everything...
var task = $("IN_TASKS");
  if (task)
  {
    Element.hide("IN_TASKS");
  }
  task = $("ME_TASKS");
  if (task)
  {
    Element.hide("ME_TASKS");
  }
  task = $("ER_TASKS");
  if (task)
  {
    Element.hide("ER_TASKS");
  }
  task = $("BA_TASKS");
  if (task)
  {
    Element.hide("BA_TASKS");
  }
  task = $("ENVAP_TASKS");
  if (task)
  {
    Element.hide("ENVAP_TASKS");
  }
   task = $("EOCM_TASKS");
  if (task)
  {
    Element.hide("EOCM_TASKS");
  }
  task = $("EA_TASKS");
  if (task)
  {
    Element.hide("EA_TASKS");
  }
  task = $("IP_TASKS");
  if (task)
  {
    Element.hide("IP_TASKS");
  }
  task = $("GV_TASKS");
  if (task)
  {
    Element.hide("GV_TASKS");
  }
  task = $("ENV1_TASKS");
  if (task)
  {
    Element.hide("ENV1_TASKS");
  }
  task = $("ENV2_TASKS");
  if (task)
  {
    Element.hide("ENV2_TASKS");
  }
  task = $("ENV3_TASKS");
  if (task)
  {
    Element.hide("ENV3_TASKS");
  }
  task = $("ENV4_TASKS");
  if (task)
  {
    Element.hide("ENV4_TASKS");
  }
  task = $("PSU_TASKS");
  if (task)
  {
    Element.hide("PSU_TASKS");
  }
  task = $("PEC_TASKS");
  if (task)
  {
    Element.hide("PEC_TASKS");
  }
  task = $("PC_TASKS");
  if (task)
  {
    Element.hide("PC_TASKS");
  }
  task = $("BT_TASKS");
  if (task)
  {
    Element.hide("BT_TASKS");
  }
  task = $("SM_TASKS");
  if (task)
  {
    Element.hide("SM_TASKS");
  }
  task = $("FM_TASKS");
  if (task)
  {
    Element.hide("FM_TASKS");
  }
  task = $("WM_TASKS");
  if (task)
  {
    Element.hide("WM_TASKS");
  }
  task = $("RKM_TASKS");
  if (task)
  {
    Element.hide("RKM_TASKS");
  }
  task = $("IPM_TASKS");
  if (task)
  {
    Element.hide("IPM_TASKS");
  }
  task = $("STM_TASKS");
  if (task)
  {
    Element.hide("STM_TASKS");
  }
  task = $("CMM_TASKS");
  if (task)
  {
    Element.hide("CMM_TASKS");
  }
  task = $("QM_TASKS");
  if (task)
  {
    Element.hide("QM_TASKS");
  }
  task = $("CM_TASKS");
  if (task)
  {
    Element.hide("CM_TASKS");
  }
  task = $("IFM_TASKS");
  if (task)
  {
    Element.hide("IFM_TASKS");
  }
  task = $("PCM_TASKS");
  if (task)
  {
    Element.hide("PCM_TASKS");
  }
  task = $("OCHM_TASKS");
  if (task)
  {
    Element.hide("OCHM_TASKS");
  }
  task = $("MISC_TASKS");
  if (task)
  {
    Element.hide("MISC_TASKS");
  }
  task = $("PJM_TASKS");
  if (task)
  {
    Element.hide("PJM_TASKS");
  }
  task = $("A_TASKS");
  if (task)
  {
    Element.hide("A_TASKS");
  }
  task = $("B_TASKS");
  if (task)
  {
    Element.hide("B_TASKS");
  }
  task = $("C_TASKS");
  if (task)
  {
    Element.hide("C_TASKS");
  }
  task = $("D_TASKS");
  if (task)
  {
    Element.hide("D_TASKS");
  }
  task = $("E_TASKS");
  if (task)
  {
    Element.hide("E_TASKS");
  }
  task = $("RD_TASKS");
  if (task)
  {
    Element.hide("RD_TASKS");
  }
  task = $("RA_TASKS");
  if (task)
  {
    Element.hide("RA_TASKS");
  }
  task = $("MC_TASKS");
  if (task)
  {
    Element.hide("MC_TASKS");
  }
  task = $("AN_TASKS");
  if (task)
  {
    Element.hide("AN_TASKS");
  }
  task = $("DS_TASKS");
  if (task)
  {
    Element.hide("DS_TASKS");
  }
  task = $("IM_TASKS");
  if (task)
  {
    Element.hide("IM_TASKS");
  }
  task = $("TE_TASKS");
  if (task)
  {
    Element.hide("TE_TASKS");
  }
  task = $("PT_TASKS");
  if (task)
  {
    Element.hide("PT_TASKS");
  }
  task = $("TA_TASKS");
  if (task)
  {
    Element.hide("TA_TASKS");
  }
  task = $("CV_TASKS");
  if (task)
  {
    Element.hide("CV_TASKS");
  }
  task = $("DO_TASKS");
  if (task)
  {
    Element.hide("DO_TASKS");
  }
  task = $("AP_TASKS");
  if (task)
  {
    Element.hide("AP_TASKS");
  }
  task = $("OCM_TASKS");
  if (task)
  {
    Element.hide("OCM_TASKS");
  }
  task = $("TR_TASKS");
  if (task)
  {
    Element.hide("TR_TASKS");
  }
  task = $("TS_TASKS");
  if (task)
  {
    Element.hide("TS_TASKS");
  }
  task = $("PS_TASKS");
  if (task)
  {
    Element.hide("PS_TASKS");
  }
  task = $("IMP15_TASKS");
  if (task)
  {
    Element.hide("IMP15_TASKS");
  }
  task = $("IMP16_TASKS");
  if (task)
  {
    Element.hide("IMP16_TASKS");
  }
    //task = $("TasksLabel");
  //if (task)
  //{
  //  Element.hide("TasksLabel");
  //}
  }

  // Then show the selected task...
  if (idToShow)
  {
    if (idToShow!="TextNav")
    {
      var tasksLabel = $("TasksLabel");
      if (tasksLabel && !Element.visible(tasksLabel))
      {
        Effect.BlindDown("TasksLabel");
      }
      var elem = $(""+idToShow);
      var openImageElem = $(""+openImageId);
      var closedImageElem = $(""+closedImageId);
      if (!Element.visible(elem))
      {
        Effect.BlindDown(elem);
        if (openImageElem != null && closedImageElem!=null)
        {
          Element.hide(closedImageId);
          Element.show(openImageId);
        }
      }
    }
    // Should this be in showOneTaskFromList?
    if (idToShow=="TextNav" && !Element.visible($(TextNav)))
    {
      toggleElementBlind('TextNav', 'TextNavOnImg', 'TextNavOffImg');
    }
  }
}

function collapseAllENVTasks()
{
  var task = $("IN_TASKS");
  if (task)
  {
    Effect.BlindUp("IN_TASKS");
    Element.hide("IN_OPEN");
    Element.show("IN_CLOSED");
  }
  task = $("ME_TASKS");
  if (task)
  {
    Effect.BlindUp("ME_TASKS");
    Element.hide("ME_OPEN");
    Element.show("ME_CLOSED");
  }
  task = $("ER_TASKS");
  if (task)
  {
    Effect.BlindUp("ER_TASKS");
    Element.hide("ER_OPEN");
    Element.show("ER_CLOSED");
  }
  task = $("BA_TASKS");
  if (task)
  {
    Effect.BlindUp("BA_TASKS");
    Element.hide("BA_OPEN");
    Element.show("BA_CLOSED");
  }
  task = $("ENVAP_TASKS");
  if (task)
  {
    Effect.BlindUp("ENVAP_TASKS");
    Element.hide("ENVAP_OPEN");
    Element.show("ENVAP_CLOSED");
  }
  task = $("EOCM_TASKS");
  if (task)
  {
    Effect.BlindUp("EOCM_TASKS");
    Element.hide("EOCM_OPEN");
    Element.show("EOCM_CLOSED");
  }
  task = $("EA_TASKS");
  if (task)
  {
    Effect.BlindUp("EA_TASKS");
    Element.hide("EA_OPEN");
    Element.show("EA_CLOSED");
  }
  task = $("IP_TASKS");
  if (task)
  {
    Effect.BlindUp("IP_TASKS");
    Element.hide("IP_OPEN");
    Element.show("IP_CLOSED");
  }
  task = $("GV_TASKS");
  if (task)
  {
    Effect.BlindUp("GV_TASKS");
    Element.hide("GV_OPEN");
    Element.show("GV_CLOSED");
  }
  task = $("ENV1_TASKS");
  if (task)
  {
    Effect.BlindUp("ENV1_TASKS");
    Element.hide("ENV1_OPEN");
    Element.show("ENV1_CLOSED");
  }
  task = $("ENV2_TASKS");
  if (task)
  {
    Effect.BlindUp("ENV2_TASKS");
    Element.hide("ENV2_OPEN");
    Element.show("ENV2_CLOSED");
  }
  task = $("ENV3_TASKS");
  if (task)
  {
    Effect.BlindUp("ENV3_TASKS");
    Element.hide("ENV3_OPEN");
    Element.show("ENV3_CLOSED");
  }
  task = $("ENV4_TASKS");
  if (task)
  {
    Effect.BlindUp("ENV4_TASKS");
    Element.hide("ENV4_OPEN");
    Element.show("ENV4_CLOSED");
  }
}
  
function collapseAllPJMTasks()
{
  var task = $("PSU_TASKS");
  if (task)
  {
    Effect.BlindUp("PSU_TASKS");
    Element.hide("PSU_OPEN");
    Element.show("PSU_CLOSED");
  }
  task = $("PEC_TASKS");
  if (task)
  {
    Effect.BlindUp("PEC_TASKS");
    Element.hide("PEC_OPEN");
    Element.show("PEC_CLOSED");
  }
  task = $("PC_TASKS");
  if (task)
  {
    Effect.BlindUp("PC_TASKS");
    Element.hide("PC_OPEN");
    Element.show("PC_CLOSED");
  }
  task = $("BT_TASKS");
  if (task)
  {
    Effect.BlindUp("BT_TASKS");
    Element.hide("BT_OPEN");
    Element.show("BT_CLOSED");
  }
  task = $("SM_TASKS");
  if (task)
  {
    Effect.BlindUp("SM_TASKS");
    Element.hide("SM_OPEN");
    Element.show("SM_CLOSED");
  }
  task = $("FM_TASKS");
  if (task)
  {
    Effect.BlindUp("FM_TASKS");
    Element.hide("FM_OPEN");
    Element.show("FM_CLOSED");
  }
  task = $("WM_TASKS");
  if (task)
  {
    Effect.BlindUp("WM_TASKS");
    Element.hide("WM_OPEN");
    Element.show("WM_CLOSED");
  }
  task = $("RKM_TASKS");
  if (task)
  {
    Effect.BlindUp("RKM_TASKS");
    Element.hide("RKM_OPEN");
    Element.show("RKM_CLOSED");
  }
  task = $("IPM_TASKS");
  if (task)
  {
    Effect.BlindUp("IPM_TASKS");
    Element.hide("IPM_OPEN");
    Element.show("IPM_CLOSED");
  }
  task = $("STM_TASKS");
  if (task)
  {
    Effect.BlindUp("STM_TASKS");
    Element.hide("STM_OPEN");
    Element.show("STM_CLOSED");
  }
  task = $("CMM_TASKS");
  if (task)
  {
    Effect.BlindUp("CMM_TASKS");
    Element.hide("CMM_OPEN");
    Element.show("CMM_CLOSED");
  }
  task = $("QM_TASKS");
  if (task)
  {
    Effect.BlindUp("QM_TASKS");
    Element.hide("QM_OPEN");
    Element.show("QM_CLOSED");
  }
  task = $("CM_TASKS");
  if (task)
  {
    Effect.BlindUp("CM_TASKS");
    Element.hide("CM_OPEN");
    Element.show("CM_CLOSED");
  }
  task = $("IFM_TASKS");
  if (task)
  {
    Effect.BlindUp("IFM_TASKS");
    Element.hide("IFM_OPEN");
    Element.show("IFM_CLOSED");
  }
  task = $("PCM_TASKS");
  if (task)
  {
    Effect.BlindUp("PCM_TASKS");
    Element.hide("PCM_OPEN");
    Element.show("PCM_CLOSED");
  }
  task = $("OCHM_TASKS");
  if (task)
  {
    Effect.BlindUp("OCHM_TASKS");
    Element.hide("OCHM_OPEN");
    Element.show("OCHM_CLOSED");
  }
 task = $("MISC_TASKS");
  if (task)
  {
    Effect.BlindUp("MISC_TASKS");
    Element.hide("MISC_OPEN");
    Element.show("MISC_CLOSED");
  }
}

function collapseAllOUMTasks()
{
  // Change this!
  collapseAllTasks();
}

// This is the function that collapses all OUM Enable tasks (this is all there was in the beginning)
function collapseAllTasks()
{
  var task = $("PJM_TASKS");
  if (task)
  {
    Effect.BlindUp("PJM_TASKS");
    Element.hide("PJM_OPEN");
    Element.show("PJM_CLOSED");
  }
  task = $("PSU_TASKS");
  if (task)
  {
    Effect.BlindUp("PSU_TASKS");
    Element.hide("PSU_OPEN");
    Element.show("PSU_CLOSED");
  }
  task = $("PEC_TASKS");
  if (task)
  {
    Effect.BlindUp("PEC_TASKS");
    Element.hide("PEC_OPEN");
    Element.show("PEC_CLOSED");
  }
  task = $("PC_TASKS");
  if (task)
  {
    Effect.BlindUp("PC_TASKS");
    Element.hide("PC_OPEN");
    Element.show("PC_CLOSED");
  }
  task = $("IN_TASKS");
  if (task)
  {
    Effect.BlindUp("IN_TASKS");
    Element.hide("IN_OPEN");
    Element.show("IN_CLOSED");
  }
  task = $("ME_TASKS");
  if (task)
  {
    Effect.BlindUp("ME_TASKS");
    Element.hide("ME_OPEN");
    Element.show("ME_CLOSED");
  }
  task = $("A_TASKS");
  if (task)
  {
    Effect.BlindUp("A_TASKS");
    Element.hide("A_OPEN");
    Element.show("A_CLOSED");
  }
  task = $("B_TASKS");
  if (task)
  {
    Effect.BlindUp("B_TASKS");
    Element.hide("B_OPEN");
    Element.show("B_CLOSED");
  }
  task = $("C_TASKS");
  if (task)
  {
    Effect.BlindUp("C_TASKS");
    Element.hide("C_OPEN");
    Element.show("C_CLOSED");
  }
  task = $("D_TASKS");
  if (task)
  {
    Effect.BlindUp("D_TASKS");
    Element.hide("D_OPEN");
    Element.show("D_CLOSED");
  }
  task = $("E_TASKS");
  if (task)
  {
    Effect.BlindUp("E_TASKS");
    Element.hide("E_OPEN");
    Element.show("E_CLOSED");
  }
  task = $("RD_TASKS");
  if (task)
  {
    Effect.BlindUp("RD_TASKS");
    Element.hide("RD_OPEN");
    Element.show("RD_CLOSED");
  }
  task = $("RA_TASKS");
  if (task)
  {
    Effect.BlindUp("RA_TASKS");
    Element.hide("RA_OPEN");
    Element.show("RA_CLOSED");
  }
  task = $("MC_TASKS");
  if (task)
  {
    Effect.BlindUp("MC_TASKS");
    Element.hide("MC_OPEN");
    Element.show("MC_CLOSED");
  }
  task = $("AN_TASKS");
  if (task)
  {
    Effect.BlindUp("AN_TASKS");
    Element.hide("AN_OPEN");
    Element.show("AN_CLOSED");
  }
  task = $("DS_TASKS");
  if (task)
  {
    Effect.BlindUp("DS_TASKS");
    Element.hide("DS_OPEN");
    Element.show("DS_CLOSED");
  }
  task = $("IM_TASKS");
  if (task)
  {
    Effect.BlindUp("IM_TASKS");
    Element.hide("IM_OPEN");
    Element.show("IM_CLOSED");
  }
  task = $("TE_TASKS");
  if (task)
  {
    Effect.BlindUp("TE_TASKS");
    Element.hide("TE_OPEN");
    Element.show("TE_CLOSED");
  }
  task = $("PT_TASKS");
  if (task)
  {
    Effect.BlindUp("PT_TASKS");
    Element.hide("PT_OPEN");
    Element.show("PT_CLOSED");
  }
  task = $("TA_TASKS");
  if (task)
  {
    Effect.BlindUp("TA_TASKS");
    Element.hide("TA_OPEN");
    Element.show("TA_CLOSED");
  }
  task = $("CV_TASKS");
  if (task)
  {
    Effect.BlindUp("CV_TASKS");
    Element.hide("CV_OPEN");
    Element.show("CV_CLOSED");
  }
  task = $("DO_TASKS");
  if (task)
  {
    Effect.BlindUp("DO_TASKS");
    Element.hide("DO_OPEN");
    Element.show("DO_CLOSED");
  }
  task = $("AP_TASKS");
  if (task)
  {
    Effect.BlindUp("AP_TASKS");
    Element.hide("AP_OPEN");
    Element.show("AP_CLOSED");
  }
  task = $("OCM_TASKS");
  if (task)
  {
    Effect.BlindUp("OCM_TASKS");
    Element.hide("OCM_OPEN");
    Element.show("OCM_CLOSED");
  }
  task = $("TR_TASKS");
  if (task)
  {
    Effect.BlindUp("TR_TASKS");
    Element.hide("TR_OPEN");
    Element.show("TR_CLOSED");
  }
  task = $("TS_TASKS");
  if (task)
  {
    Effect.BlindUp("TS_TASKS");
    Element.hide("TS_OPEN");
    Element.show("TS_CLOSED");
  }
  task = $("PS_TASKS");
  if (task)
  {
    Effect.BlindUp("PS_TASKS");
    Element.hide("PS_OPEN");
    Element.show("PS_CLOSED");
  }
  task = $("IMP15_TASKS");
  if (task)
  {
    Effect.BlindUp("IMP15_TASKS");
    Element.hide("IMP15_OPEN");
    Element.show("IMP15_CLOSED");
  }
  task = $("IMP16_TASKS");
  if (task)
  {
    Effect.BlindUp("IMP16_TASKS");
    Element.hide("IMP16_OPEN");
    Element.show("IMP16_CLOSED");
  }
}

function expandAllENVTasks()
{
  var task = $("IN_TASKS");
  if (task)
  {
    Effect.BlindDown("IN_TASKS");
    Element.hide("IN_CLOSED");
    Element.show("IN_OPEN");
  }
  task = $("ME_TASKS");
  if (task)
  {
    Effect.BlindDown("ME_TASKS");
    Element.hide("ME_CLOSED");
    Element.show("ME_OPEN");
  }
  task = $("ER_TASKS");
  if (task)
  {
    Effect.BlindDown("ER_TASKS");
    Element.hide("ER_CLOSED");
    Element.show("ER_OPEN");
  }
  task = $("BA_TASKS");
  if (task)
  {
    Effect.BlindDown("BA_TASKS");
    Element.hide("BA_CLOSED");
    Element.show("BA_OPEN");
  }
  task = $("ENVAP_TASKS");
  if (task)
  {
    Effect.BlindDown("ENVAP_TASKS");
    Element.hide("ENVAP_CLOSED");
    Element.show("ENVAP_OPEN");
  }
  task = $("EOCM_TASKS");
  if (task)
  {
    Effect.BlindDown("EOCM_TASKS");
    Element.hide("EOCM_CLOSED");
    Element.show("EOCM_OPEN");
  }
  task = $("EA_TASKS");
  if (task)
  {
    Effect.BlindDown("EA_TASKS");
    Element.hide("EA_CLOSED");
    Element.show("EA_OPEN");
  }
  task = $("IP_TASKS");
  if (task)
  {
    Effect.BlindDown("IP_TASKS");
    Element.hide("IP_CLOSED");
    Element.show("IP_OPEN");
  }
  task = $("GV_TASKS");
  if (task)
  {
    Effect.BlindDown("GV_TASKS");
    Element.hide("GV_CLOSED");
    Element.show("GV_OPEN");
  }
  task = $("ENV1_TASKS");
  if (task)
  {
    Effect.BlindDown("ENV1_TASKS");
    Element.hide("ENV1_CLOSED");
    Element.show("ENV1_OPEN");
  }
  task = $("ENV2_TASKS");
  if (task)
  {
    Effect.BlindDown("ENV2_TASKS");
    Element.hide("ENV2_CLOSED");
    Element.show("ENV2_OPEN");
  }
  task = $("ENV3_TASKS");
  if (task)
  {
    Effect.BlindDown("ENV3_TASKS");
    Element.hide("ENV3_CLOSED");
    Element.show("ENV3_OPEN");
  }
  task = $("ENV4_TASKS");
  if (task)
  {
    Effect.BlindDown("ENV4_TASKS");
    Element.hide("ENV4_CLOSED");
    Element.show("ENV4_OPEN");
  }
}

function expandAllPJMTasks()
{
  var task = $("PSU_TASKS");
  if (task)
  {
    Effect.BlindDown("PSU_TASKS");
    Element.hide("PSU_CLOSED");
    Element.show("PSU_OPEN");
  }
  task = $("PEC_TASKS");
  if (task)
  {
    Effect.BlindDown("PEC_TASKS");
    Element.hide("PEC_CLOSED");
    Element.show("PEC_OPEN");
  }
  task = $("PC_TASKS");
  if (task)
  {
    Effect.BlindDown("PC_TASKS");
    Element.hide("PC_CLOSED");
    Element.show("PC_OPEN");
  }
  task = $("BT_TASKS");
  if (task)
  {
    Effect.BlindDown("BT_TASKS");
    Element.hide("BT_CLOSED");
    Element.show("BT_OPEN");
  }
  task = $("SM_TASKS");
  if (task)
  {
    Effect.BlindDown("SM_TASKS");
    Element.hide("SM_CLOSED");
    Element.show("SM_OPEN");
  }
  task = $("FM_TASKS");
  if (task)
  {
    Effect.BlindDown("FM_TASKS");
    Element.hide("FM_CLOSED");
    Element.show("FM_OPEN");
  }
  task = $("WM_TASKS");
  if (task)
  {
    Effect.BlindDown("WM_TASKS");
    Element.hide("WM_CLOSED");
    Element.show("WM_OPEN");
  }
  task = $("RKM_TASKS");
  if (task)
  {
    Effect.BlindDown("RKM_TASKS");
    Element.hide("RKM_CLOSED");
    Element.show("RKM_OPEN");
  }
  task = $("IPM_TASKS");
  if (task)
  {
    Effect.BlindDown("IPM_TASKS");
    Element.hide("IPM_CLOSED");
    Element.show("IPM_OPEN");
  }
  task = $("STM_TASKS");
  if (task)
  {
    Effect.BlindDown("STM_TASKS");
    Element.hide("STM_CLOSED");
    Element.show("STM_OPEN");
  }
  task = $("CMM_TASKS");
  if (task)
  {
    Effect.BlindDown("CMM_TASKS");
    Element.hide("CMM_CLOSED");
    Element.show("CMM_OPEN");
  }
  task = $("QM_TASKS");
  if (task)
  {
    Effect.BlindDown("QM_TASKS");
    Element.hide("QM_CLOSED");
    Element.show("QM_OPEN");
  }
  task = $("CM_TASKS");
  if (task)
  {
    Effect.BlindDown("CM_TASKS");
    Element.hide("CM_CLOSED");
    Element.show("CM_OPEN");
  }
  task = $("IFM_TASKS");
  if (task)
  {
    Effect.BlindDown("IFM_TASKS");
    Element.hide("IFM_CLOSED");
    Element.show("IFM_OPEN");
  }
  task = $("PCM_TASKS");
  if (task)
  {
    Effect.BlindDown("PCM_TASKS");
    Element.hide("PCM_CLOSED");
    Element.show("PCM_OPEN");
  }
  task = $("OCHM_TASKS");
  if (task)
  {
    Effect.BlindDown("OCHM_TASKS");
    Element.hide("OCHM_CLOSED");
    Element.show("OCHM_OPEN");
  }
  task = $("MISC_TASKS");
  if (task)
  {
    Effect.BlindDown("MISC_TASKS");
    Element.hide("MISC_CLOSED");
    Element.show("MISC_OPEN");
  }
}

function expandAllOUMTasks()
{
  // Change this!
  expandAllTasks();
}

// This is the original (for OUM ENABLE).
// Remove this some day
function expandAllTasks()
{
  var task = $("A_TASKS");
  if (task)
  {
    Effect.BlindDown("A_TASKS");
    Element.hide("A_CLOSED");
    Element.show("A_OPEN");
  }
  task = $("B_TASKS");
  if (task)
  {
    Effect.BlindDown("B_TASKS");
    Element.hide("B_CLOSED");
    Element.show("B_OPEN");
  }
  task = $("C_TASKS");
  if (task)
  {
    Effect.BlindDown("C_TASKS");
    Element.hide("C_CLOSED");
    Element.show("C_OPEN");
  }
  task = $("D_TASKS");
  if (task)
  {
    Effect.BlindDown("D_TASKS");
    Element.hide("D_CLOSED");
    Element.show("D_OPEN");
  }
  task = $("E_TASKS");
  if (task)
  {
    Effect.BlindDown("E_TASKS");
    Element.hide("E_CLOSED");
    Element.show("E_OPEN");
  }
  task = $("RD_TASKS");
  if (task)
  {
    Effect.BlindDown("RD_TASKS");
    Element.hide("RD_CLOSED");
    Element.show("RD_OPEN");
  }
  task = $("RA_TASKS");
  if (task)
  {
    Effect.BlindDown("RA_TASKS");
    Element.hide("RA_CLOSED");
    Element.show("RA_OPEN");
  }
  task = $("MC_TASKS");
  if (task)
  {
    Effect.BlindDown("MC_TASKS");
    Element.hide("MC_CLOSED");
    Element.show("MC_OPEN");
  }
  task = $("AN_TASKS");
  if (task)
  {
    Effect.BlindDown("AN_TASKS");
    Element.hide("AN_CLOSED");
    Element.show("AN_OPEN");
  }
  task = $("DS_TASKS");
  if (task)
  {
    Effect.BlindDown("DS_TASKS");
    Element.hide("DS_CLOSED");
    Element.show("DS_OPEN");
  }
  task = $("IM_TASKS");
  if (task)
  {
    Effect.BlindDown("IM_TASKS");
    Element.hide("IM_CLOSED");
    Element.show("IM_OPEN");
  }
  task = $("TE_TASKS");
  if (task)
  {
    Effect.BlindDown("TE_TASKS");
    Element.hide("TE_CLOSED");
    Element.show("TE_OPEN");
  }
  task = $("PT_TASKS");
  if (task)
  {
    Effect.BlindDown("PT_TASKS");
    Element.hide("PT_CLOSED");
    Element.show("PT_OPEN");
  }
  task = $("TA_TASKS");
  if (task)
  {
    Effect.BlindDown("TA_TASKS");
    Element.hide("TA_CLOSED");
    Element.show("TA_OPEN");
  }
  task = $("CV_TASKS");
  if (task)
  {
    Effect.BlindDown("CV_TASKS");
    Element.hide("CV_CLOSED");
    Element.show("CV_OPEN");
  }
  task = $("DO_TASKS");
  if (task)
  {
    Effect.BlindDown("DO_TASKS");
    Element.hide("DO_CLOSED");
    Element.show("DO_OPEN");
  }
  task = $("AP_TASKS");
  if (task)
  {
    Effect.BlindDown("AP_TASKS");
    Element.hide("AP_CLOSED");
    Element.show("AP_OPEN");
  }
  task = $("OCM_TASKS");
  if (task)
  {
    Effect.BlindDown("OCM_TASKS");
    Element.hide("OCM_CLOSED");
    Element.show("OCM_OPEN");
  }
  task = $("TR_TASKS");
  if (task)
  {
    Effect.BlindDown("TR_TASKS");
    Element.hide("TR_CLOSED");
    Element.show("TR_OPEN");
  }
  task = $("TS_TASKS");
  if (task)
  {
    Effect.BlindDown("TS_TASKS");
    Element.hide("TS_CLOSED");
    Element.show("TS_OPEN");
  }
  task = $("PS_TASKS");
  if (task)
  {
    Effect.BlindDown("PS_TASKS");
    Element.hide("PS_CLOSED");
    Element.show("PS_OPEN");
  }
  task = $("IMP15_TASKS");
  if (task)
  {
    Effect.BlindDown("IMP15_TASKS");
    Element.hide("IMP15_CLOSED");
    Element.show("IMP15_OPEN");
  }
  task = $("IMP16_TASKS");
  if (task)
  {
    Effect.BlindDown("IMP16_TASKS");
    Element.hide("IMP16_CLOSED");
    Element.show("IMP16_OPEN");
  }
}

function showOneTask(idToShow)
{
  showTask(idToShow, true, null, null);
}

function showOneTaskFromList(selObj)
{
  var selVal = selObj.options[selObj.selectedIndex].value;
  if (selVal == "PicNav")
  {
    toggleElementBlind('PicNav', 'PicNavOnImg', 'PicNavOffImg');
  }
  else
  if (selVal != "")
  {
    var picNav = $('PicNav');
    if (picNav && Element.visible(picNav))
    {
      toggleElementBlind('PicNav', 'PicNavOnImg', 'PicNavOffImg');
    }

    if (selVal != 'PicNav' && selVal != 'PjmTextNav' && selVal != 'EnvTextNav' && selVal != 'OumTextNav' & selVal != 'TextNav')
    {
      showTask(selVal + '_TASKS', false, selVal + '_OPEN', selVal + '_CLOSED');
      location.hash = selVal + '_TASKS';
    }
    else
    {
      showOneTask(selVal, 'false');
      //location.hash = selVal;
    }
  }
}

function collapseAllWBS()
{
  /*
   * PS ACTIVITIES
   */
  var task = $("PS.ACT.PS");
  if (task)
  {
    Effect.BlindUp("PS.ACT.PS");
    Element.show("PS.ACT.PSOffImg");
    Element.hide("PS.ACT.PSOnImg");
  }
  var task = $("PS.ACT.PSSUM1");
  if (task)
  {
    Effect.BlindUp("PS.ACT.PSSUM1");
    Element.show("PS.ACT.PSSUM1OffImg");
    Element.hide("PS.ACT.PSSUM1OnImg");
  }
  var task = $("PS.ACT.PSSUM2");
  if (task)
  {
    Effect.BlindUp("PS.ACT.PSSUM2");
    Element.show("PS.ACT.PSSUM2OffImg");
    Element.hide("PS.ACT.PSSUM2OnImg");
  }
  var task = $("PS.ACT.PSSUM3");
  if (task)
  {
    Effect.BlindUp("PS.ACT.PSSUM3");
    Element.show("PS.ACT.PSSUM3OffImg");
    Element.hide("PS.ACT.PSSUM3OnImg");
  }
  var task = $("PS.ACT.PSSUM4");
  if (task)
  {
    Effect.BlindUp("PS.ACT.PSSUM4");
    Element.show("PS.ACT.PSSUM4OffImg");
    Element.hide("PS.ACT.PSSUM4OnImg");
  }
  var task = $("PS.ACT.PSSUM5");
  if (task)
  {
    Effect.BlindUp("PS.ACT.PSSUM5");
    Element.show("PS.ACT.PSSUM5OffImg");
    Element.hide("PS.ACT.PSSUM5OnImg");
  }
  var task = $("PS.ACT.PSSUM6");
  if (task)
  {
    Effect.BlindUp("PS.ACT.PSSUM6");
    Element.show("PS.ACT.PSSUM6OffImg");
    Element.hide("PS.ACT.PSSUM6OnImg");
  }
  var task = $("PS.ACT.PSSUM7");
  if (task)
  {
    Effect.BlindUp("PS.ACT.PSSUM7");
    Element.show("PS.ACT.PSSUM7OffImg");
    Element.hide("PS.ACT.PSSUM7OnImg");
  }
  var task = $("PS.ACT.RBC");
  if (task)
  {
    Effect.BlindUp("PS.ACT.RBC");
    Element.show("PS.ACT.RBCOffImg");
    Element.hide("PS.ACT.RBCOnImg");
  }
    var task = $("PS.ACT.RPAC");
  if (task)
  {
    Effect.BlindUp("PS.ACT.RPAC");
    Element.show("PS.ACT.RPACOffImg");
    Element.hide("PS.ACT.RPACOnImg");
  }
  var task = $("PS.ACT.VSSOS");
  if (task)
  {
    Effect.BlindUp("PS.ACT.VSSOS");
    Element.show("PS.ACT.VSSOSOffImg");
    Element.hide("PS.ACT.VSSOSOnImg");
  }
  var task = $("PS.ACT.DW");
  if (task)
  {
    Effect.BlindUp("PS.ACT.DW");
    Element.show("PS.ACT.DWOffImg");
    Element.hide("PS.ACT.DWOnImg");
  }
  var task = $("PS.ACT.DSPB");
  if (task)
  {
    Effect.BlindUp("PS.ACT.DSPB");
    Element.show("PS.ACT.DSPBOffImg");
    Element.hide("PS.ACT.DSPBOnImg");
  }
  var task = $("PS.ACT.CPMP");
  if (task)
  {
    Effect.BlindUp("PS.ACT.CPMP");
    Element.show("PS.ACT.CPMPOffImg");
    Element.hide("PS.ACT.CPMPOnImg");
  }
  var task = $("PS.ACT.EPI");
  if (task)
  {
    Effect.BlindUp("PS.ACT.EPI");
    Element.show("PS.ACT.EPIOffImg");
    Element.hide("PS.ACT.EPIOnImg");
  }

  /*
   * PEC ACTIVITIES
   */
  var task = $("PEC.ACT.PEC");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.PEC");
    Element.show("PEC.ACT.PECOffImg");
    Element.hide("PEC.ACT.PECOnImg");
  }
  var task = $("PEC.ACT.PECSUM1");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.PECSUM1");
    Element.show("PEC.ACT.PECSUM1OffImg");
    Element.hide("PEC.ACT.PECSUM1OnImg");
  }
  var task = $("PEC.ACT.PECSUM2");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.PECSUM2");
    Element.show("PEC.ACT.PECSUM2OffImg");
    Element.hide("PEC.ACT.PECSUM2OnImg");
  }
  var task = $("PEC.ACT.PECSUM3");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.PECSUM3");
    Element.show("PEC.ACT.PECSUM3OffImg");
    Element.hide("PEC.ACT.PECSUM3OnImg");
  }
  var task = $("PEC.ACT.PECSUM4");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.PECSUM4");
    Element.show("PEC.ACT.PECSUM4OffImg");
    Element.hide("PEC.ACT.PECSUM4OnImg");
  }
  var task = $("PEC.ACT.PECSUM5");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.PECSUM5");
    Element.show("PEC.ACT.PECSUM5OffImg");
    Element.hide("PEC.ACT.PECSUM5OnImg");
  }
  var task = $("PEC.ACT.PECSUM6");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.PECSUM6");
    Element.show("PEC.ACT.PECSUM6OffImg");
    Element.hide("PEC.ACT.PECSUM6OnImg");
  }
  var task = $("PEC.ACT.PECSUM7");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.PECSUM7");
    Element.show("PEC.ACT.PECSUM7OffImg");
    Element.hide("PEC.ACT.PECSUM7OnImg");
  }
  var task = $("PEC.ACT.PECSUM8");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.PECSUM8");
    Element.show("PEC.ACT.PECSUM8OffImg");
    Element.hide("PEC.ACT.PECSUM8OnImg");
  }
  var task = $("PEC.ACT.PECSUM9");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.PECSUM9");
    Element.show("PEC.ACT.PECSUM9OffImg");
    Element.hide("PEC.ACT.PECSUM9OnImg");
  }
  var task = $("PEC.ACT.PECSUM10");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.PECSUM10");
    Element.show("PEC.ACT.PECSUM10OffImg");
    Element.hide("PEC.ACT.PECSUM10OnImg");
  }
  var task = $("PEC.ACT.MSAA");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.MSAA");
    Element.show("PEC.ACT.MSAAOffImg");
    Element.hide("PEC.ACT.MSAAOnImg");
  }
    var task = $("PEC.ACT.MPF");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.MPF");
    Element.show("PEC.ACT.MPFOffImg");
    Element.hide("PEC.ACT.MPFOnImg");
  }
  var task = $("PEC.ACT.MPW");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.MPW");
    Element.show("PEC.ACT.MPWOffImg");
    Element.hide("PEC.ACT.MPWOnImg");
  }
  var task = $("PEC.ACT.MRIP");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.MRIP");
    Element.show("PEC.ACT.MRIPOffImg");
    Element.hide("PEC.ACT.MRIPOnImg");
  }
  var task = $("PEC.ACT.OMT");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.OMT");
    Element.show("PEC.ACT.OMTOffImg");
    Element.hide("PEC.ACT.OMTOnImg");
  }
  var task = $("PEC.ACT.MCOP");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.MCOP");
    Element.show("PEC.ACT.MCOPOffImg");
    Element.hide("PEC.ACT.MCOPOnImg");
  }
  var task = $("PEC.ACT.MPQ");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.MPQ");
    Element.show("PEC.ACT.MPQOffImg");
    Element.hide("PEC.ACT.MPQOnImg");
  }
  var task = $("PEC.ACT.CECRM");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.CECRM");
    Element.show("PEC.ACT.CECRMOffImg");
    Element.hide("PEC.ACT.CECRMOnImg");
  }
  var task = $("PEC.ACT.MMI");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.MMI");
    Element.show("PEC.ACT.MMIOffImg");
    Element.hide("PEC.ACT.MMIOnImg");
  }
  var task = $("PEC.ACT.APGCS");
  if (task)
  {
    Effect.BlindUp("PEC.ACT.APGCS");
    Element.show("PEC.ACT.APGCSOffImg");
    Element.hide("PEC.ACT.APGCSOnImg");
  }

  /*
   * INITIATE ACTIVITIES
   */
   var task = $("INIT.ACT.PEF");
  if (task)
  {
    Effect.BlindUp("INIT.ACT.PEF");
    Element.show("INIT.ACT.PEFOffImg");
    Element.hide("INIT.ACT.PEFOnImg");
  } 
 var task = $("INIT.ACT.PD");
  if (task)
  {
    Effect.BlindUp("INIT.ACT.PD");
    Element.show("INIT.ACT.PDOffImg");
    Element.hide("INIT.ACT.PDOnImg");
  } 
 var task = $("INIT.ACT.CEAWE");
  if (task)
  {
    Effect.BlindUp("INIT.ACT.CEAWE");
    Element.show("INIT.ACT.CEAWEOffImg");
    Element.hide("INIT.ACT.CEAWEOnImg");
  } 
   var task = $("INIT.ACT.DMCEC");
  if (task)
  {
    Effect.BlindUp("INIT.ACT.DMCEC");
    Element.show("INIT.ACT.DMCECOffImg");
    Element.hide("INIT.ACT.DMCECOnImg");
  } 
   var task = $("INIT.ACT.EDGI");
  if (task)
  {
    Effect.BlindUp("INIT.ACT.EDGI");
    Element.show("INIT.ACT.EDGIOffImg");
    Element.hide("INIT.ACT.EDGIOnImg");
  } 
   var task = $("INIT.ACT.EDBPD");
  if (task)
  {
    Effect.BlindUp("INIT.ACT.EDBPD");
    Element.show("INIT.ACT.EDBPDOffImg");
    Element.hide("INIT.ACT.EDBPDOnImg");
  } 
   var task = $("INIT.ACT.EDF");
  if (task)
  {
    Effect.BlindUp("INIT.ACT.EDF");
    Element.show("INIT.ACT.EDFOffImg");
    Element.hide("INIT.ACT.EDFOnImg");
  } 
   var task = $("INIT.ACT.DSPC");
  if (task)
  {
    Effect.BlindUp("INIT.ACT.DSPC");
    Element.show("INIT.ACT.DSPCOffImg");
    Element.hide("INIT.ACT.DSPCOnImg");
  } 
   var task = $("INIT.ACT.PTI");
  if (task)
  {
    Effect.BlindUp("INIT.ACT.PTI");
    Element.show("INIT.ACT.PTIOffImg");
    Element.hide("INIT.ACT.PTIOnImg");
  } 
  
  /*
   * MAINTAIN AND EVOLVE ACTIVITIES
   */
   var task = $("ME.ACT.ME");
  if (task)
  {
    Effect.BlindUp("ME.ACT.ME");
    Element.show("ME.ACT.MEOffImg");
    Element.hide("ME.ACT.MEOnImg");
  } 
  
  /*
   * INCEPTION ACTIVITIES
   */
   var task = $("A.INCEPTION");
  if (task)
  {
    Effect.BlindUp("A.INCEPTION");
    Element.show("A.INCEPTIONOffImg");
    Element.hide("A.INCEPTIONOnImg");
  }
   var task = $("A.ACT.GBRI");
  if (task)
  {
    Effect.BlindUp("A.ACT.GBRI");
    Element.show("A.ACT.GBRIOffImg");
    Element.hide("A.ACT.GBRIOnImg");
  }
   var task = $("A.ACT.ECBB");
  if (task)
  {
    Effect.BlindUp("A.ACT.ECBB");
    Element.show("A.ACT.ECBBOffImg");
    Element.hide("A.ACT.ECBBOnImg");
  }
   var task = $("A.ACT.GR");
  if (task)
  {
    Effect.BlindUp("A.ACT.GR");
    Element.show("A.ACT.GROffImg");
    Element.hide("A.ACT.GROnImg");
  }
  var task = $("A.ACT.PSUIA");
  if (task)
  {
    Effect.BlindUp("A.ACT.PSUIA");
    Element.show("A.ACT.PSUIAOffImg");
    Element.hide("A.ACT.PSUIAOnImg");
  }
  var task = $("A.ACT.CR");
  if (task)
  {
    Effect.BlindUp("A.ACT.CR");
    Element.show("A.ACT.CROffImg");
    Element.hide("A.ACT.CROnImg");
  }
  var task = $("A.ACT.CCPI");
  if (task)
  {
    Effect.BlindUp("A.ACT.CCPI");
    Element.show("A.ACT.CCPIOffImg");
    Element.hide("A.ACT.CCPIOnImg");
  }
  var task = $("A.ACT.GSP");
  if (task)
  {
     Effect.BlindUp("A.ACT.GSP");
     Element.show("A.ACT.GSPOffImg");
     Element.hide("A.ACT.GSPOnImg");
  }
   var task = $("A.ACT.SKSD");
  if (task)
  {
    Effect.BlindUp("A.ACT.SKSD");
    Element.show("A.ACT.SKSDOffImg");
    Element.hide("A.ACT.SKSDOnImg");
  }
  var task = $("A.ACT.PPJT");
  if (task)
  {
     Effect.BlindUp("A.ACT.PPJT");
     Element.show("A.ACT.PPJTOffImg");
     Element.hide("A.ACT.PPJTOnImg");
  }
  var task = $("A.ACT.CMAHC");
  if (task)
  {
     Effect.BlindUp("A.ACT.CMAHC");
     Element.show("A.ACT.CMAHCOffImg");
     Element.hide("A.ACT.CMAHCOnImg");
  }
  var task = $("A.ACT.TPT");
  if (task)
  {
     Effect.BlindUp("A.ACT.TPT");
     Element.show("A.ACT.TPTOffImg");
     Element.hide("A.ACT.TPTOnImg");
  }
  var task = $("A.ACT.CEAW");
  if (task)
  {
     Effect.BlindUp("A.ACT.CEAW");
     Element.show("A.ACT.CEAWOffImg");
     Element.hide("A.ACT.CEAWOnImg");
  }
  var task = $("A.ACT.CAWI");
  if (task)
  {
     Effect.BlindUp("A.ACT.CAWI");
     Element.show("A.ACT.CAWIOffImg");
     Element.hide("A.ACT.CAWIOnImg");
  }
  var task = $("A.ACT.CORA");
  if (task)
  {
     Effect.BlindUp("A.ACT.CORA");
     Element.show("A.ACT.CORAOffImg");
     Element.hide("A.ACT.CORAOnImg");
  }
  var task = $("A.ACT.DCMRCCI");
  if (task)
  {
     Effect.BlindUp("A.ACT.DCMRCCI");
     Element.show("A.ACT.DCMRCCIOffImg");
     Element.hide("A.ACT.DCMRCCIOnImg");
  }
  var task = $("A.ACT.LCOB");
  if (task)
  {
     Effect.BlindUp("A.ACT.LCOB");
     Element.show("A.ACT.LCOBOffImg");
     Element.hide("A.ACT.LCOBOnImg");
  }

  /*
   * ELABORATION ACTIVITIES
   */
  var task = $("B.ELABORATION");
  if (task)
  {
    Effect.BlindUp("B.ELABORATION");
    Element.show("B.ELABORATIONINCEPTIONOffImg");
    Element.hide("B.ELABORATIONOnImg");
  }
  var task = $("B.ACT.DPS");
  if (task)
  {
     Effect.BlindUp("B.ACT.DPS");
     Element.show("B.ACT.DPSOffImg");
     Element.hide("B.ACT.DPSOnImg");
  }
  var task = $("B.ACT.DI");
  if (task)
  {
     Effect.BlindUp("B.ACT.DI");
     Element.show("B.ACT.DIOffImg");
     Element.hide("B.ACT.DIOnImg");
  }
  var task = $("B.ACT.PEE");
  if (task)
  {
     Effect.BlindUp("B.ACT.PEE");
     Element.show("B.ACT.PEEOffImg");
     Element.hide("B.ACT.PEEOnImg");
  }
  var task = $("B.ACT.GBRE");
  if (task)
  {
     Effect.BlindUp("B.ACT.GBRE");
     Element.show("B.ACT.GBREOffImg");
     Element.hide("B.ACT.GBREOnImg");
  }
  var task = $("B.ACT.DTP");
  if (task)
  {
     Effect.BlindUp("B.ACT.DTP");
     Element.show("B.ACT.DTPOffImg");
     Element.hide("B.ACT.DTPOnImg");
  }
  var task = $("B.ACT.SSC");
  if (task)
  {
     Effect.BlindUp("B.ACT.SSC");
     Element.show("B.ACT.SSCOffImg");
     Element.hide("B.ACT.SSCOnImg");
  }
  var task = $("B.ACT.PVC");
  if (task)
  {
     Effect.BlindUp("B.ACT.PVC");
     Element.show("B.ACT.PVCOffImg");
     Element.hide("B.ACT.PVCOnImg");
  }
  var task = $("B.ACT.PGA");
  if (task)
  {
     Effect.BlindUp("B.ACT.PGA");
     Element.show("B.ACT.PGAOffImg");
     Element.hide("B.ACT.PGAOnImg");
  }
  var task = $("B.ACT.DUCM");
  if (task)
  {
     Effect.BlindUp("B.ACT.DUCM");
     Element.show("B.ACT.DUCMOffImg");
     Element.hide("B.ACT.DUCMOnImg");
  }
  var task = $("B.ACT.CCPE");
  if (task)
  {
     Effect.BlindUp("B.ACT.CCPE");
     Element.show("B.ACT.CCPEOffImg");
     Element.hide("B.ACT.CCPEOnImg");
  }
  var task = $("B.ACT.CS");
  if (task)
  {
     Effect.BlindUp("B.ACT.CS");
     Element.show("B.ACT.CSOffImg");
     Element.hide("B.ACT.CSOnImg");
  }
  var task = $("B.ACT.BSA");
  if (task)
  {
     Effect.BlindUp("B.ACT.BSA");
     Element.show("B.ACT.BSAOffImg");
     Element.hide("B.ACT.BSAOnImg");
  }
  var task = $("B.ACT.DUCD");
  if (task)
  {
     Effect.BlindUp("B.ACT.DUCD");
     Element.show("B.ACT.DUCDOffImg");
     Element.hide("B.ACT.DUCDOnImg");
  }
  var task = $("B.ACT.AE");
  if (task)
  {
     Effect.BlindUp("B.ACT.AE");
     Element.show("B.ACT.AEOffImg");
     Element.hide("B.ACT.AEOnImg");
  }
  var task = $("B.ACT.DE");
  if (task)
  {
     Effect.BlindUp("B.ACT.DE");
     Element.show("B.ACT.DEOffImg");
     Element.hide("B.ACT.DEOnImg");
  }
  var task = $("B.ACT.DCCTSE");
  if (task)
  {
     Effect.BlindUp("B.ACT.DCCTSE");
     Element.show("B.ACT.DCCTSEOffImg");
     Element.hide("B.ACT.DCCTSEOnImg");
  }
  var task = $("B.ACT.DSTSE");
  if (task)
  {
     Effect.BlindUp("B.ACT.DSTSE");
     Element.show("B.ACT.DSTSEOffImg");
     Element.hide("B.ACT.DSTSEOnImg");
  }
  var task = $("B.ACT.DVCSP");
  if (task)
  {
     Effect.BlindUp("B.ACT.DVCSP");
     Element.show("B.ACT.DVCSPOffImg");
     Element.hide("B.ACT.DVCSPOnImg");
  }
  var task = $("B.ACT.PCCTE");
  if (task)
  {
     Effect.BlindUp("B.ACT.PCCTE");
     Element.show("B.ACT.PCCTEOffImg");
     Element.hide("B.ACT.PCCTEOnImg");
  }
  var task = $("B.ACT.PSTE");
  if (task)
  {
     Effect.BlindUp("B.ACT.PSTE");
     Element.show("B.ACT.PSTEOffImg");
     Element.hide("B.ACT.PSTEOnImg");
  }
  var task = $("B.ACT.VUPE");
  if (task)
  {
     Effect.BlindUp("B.ACT.VUPE");
     Element.show("B.ACT.VUPEOffImg");
     Element.hide("B.ACT.VUPEOnImg");
  }
  var task = $("B.ACT.PPM");
  if (task)
  {
     Effect.BlindUp("B.ACT.PPM");
     Element.show("B.ACT.PPMOffImg");
     Element.hide("B.ACT.PPMOnImg");
  }
  var task = $("B.ACT.PACDE");
  if (task)
  {
     Effect.BlindUp("B.ACT.PACDE");
     Element.show("B.ACT.PACDEOffImg");
     Element.hide("B.ACT.PACDEOnImg");
  }
  var task = $("B.ACT.PBPII");
  if (task)
  {
     Effect.BlindUp("B.ACT.PBPII");
     Element.show("B.ACT.PBPIIOffImg");
     Element.hide("B.ACT.PBPIIOnImg");
  }
  var task = $("B.ACT.DCMRCCE");
  if (task)
  {
     Effect.BlindUp("B.ACT.DCMRCCE");
     Element.show("B.ACT.DCMRCCEOffImg");
     Element.hide("B.ACT.DCMRCCEOnImg");
  }
  var task = $("B.ACT.LCAR");
  if (task)
  {
     Effect.BlindUp("B.ACT.LCAR");
     Element.show("B.ACT.LCAROffImg");
     Element.hide("B.ACT.LCAROnImg");
  }

  /*
   * CONSTRUCTION ACTIVITIES
   */
  var task = $("C.ACT.FR");
  if (task)
  {
     Effect.BlindUp("C.ACT.FR");
     Element.show("C.ACT.FROffImg");
     Element.hide("C.ACT.FROnImg");
  }
  var task = $("C.ACT.AC");
  if (task)
  {
     Effect.BlindUp("C.ACT.AC");
     Element.show("C.ACT.ACOffImg");
     Element.hide("C.ACT.ACOnImg");
  }
  var task = $("C.ACT.DC");
  if (task)
  {
     Effect.BlindUp("C.ACT.DC");
     Element.show("C.ACT.DCOffImg");
     Element.hide("C.ACT.DCOnImg");
  }
  var task = $("C.ACT.PTP");
  if (task)
  {
     Effect.BlindUp("C.ACT.PTP");
     Element.show("C.ACT.PTPOffImg");
     Element.hide("C.ACT.PTPOnImg");
  }
  var task = $("C.ACT.PEC");
  if (task)
  {
     Effect.BlindUp("C.ACT.PEC");
     Element.show("C.ACT.PECOffImg");
     Element.hide("C.ACT.PECOnImg");
  }
  var task = $("C.ACT.DCCTSC");
  if (task)
  {
     Effect.BlindUp("C.ACT.DCCTSC");
     Element.show("C.ACT.DCCTSCOffImg");
     Element.hide("C.ACT.DCCTSCOnImg");
  }
  var task = $("C.ACT.DSTSC");
  if (task)
  {
     Effect.BlindUp("C.ACT.DSTSC");
     Element.show("C.ACT.DSTSCOffImg");
     Element.hide("C.ACT.DSTSCOnImg");
  }
  var task = $("C.ACT.DSITS");
  if (task)
  {
     Effect.BlindUp("C.ACT.DSITS");
     Element.show("C.ACT.DSITSOffImg");
     Element.hide("C.ACT.DSITSOnImg");
  }
  var task = $("C.ACT.ICC");
  if (task)
  {
     Effect.BlindUp("C.ACT.ICC");
     Element.show("C.ACT.ICCOffImg");
     Element.hide("C.ACT.ICCOnImg");
  }
  var task = $("C.ACT.PCCTC");
  if (task)
  {
     Effect.BlindUp("C.ACT.PCCTC");
     Element.show("C.ACT.PCCTCOffImg");
     Element.hide("C.ACT.PCCTCOnImg");
  }
  var task = $("C.ACT.PST");
  if (task)
  {
     Effect.BlindUp("C.ACT.PST");
     Element.show("C.ACT.PSTOffImg");
     Element.hide("C.ACT.PSTOnImg");
  }
  var task = $("C.ACT.PSTC");
  if (task)
  {
     Effect.BlindUp("C.ACT.PSTC");
     Element.show("C.ACT.PSTCOffImg");
     Element.hide("C.ACT.PSTCOnImg");
  }
  var task = $("C.ACT.PFST");
  if (task)
  {
     Effect.BlindUp("C.ACT.PFST");
     Element.show("C.ACT.PFSTOffImg");
     Element.hide("C.ACT.PFSTOnImg");
  }
  var task = $("C.ACT.PSIT");
  if (task)
  {
     Effect.BlindUp("C.ACT.PSIT");
     Element.show("C.ACT.PSITOffImg");
     Element.hide("C.ACT.PSITOnImg");
  }
  var task = $("C.ACT.PPT");
  if (task)
  {
     Effect.BlindUp("C.ACT.PPT");
     Element.show("C.ACT.PPTOffImg");
     Element.hide("C.ACT.PPTOnImg");
  }
  var task = $("C.ACT.PT");
  if (task)
  {
     Effect.BlindUp("C.ACT.PT");
     Element.show("C.ACT.PTOffImg");
     Element.hide("C.ACT.PTOnImg");
  }
  var task = $("C.ACT.PCO");
  if (task)
  {
     Effect.BlindUp("C.ACT.PCO");
     Element.show("C.ACT.PCOOffImg");
     Element.hide("C.ACT.PCOOnImg");
  }
  var task = $("C.ACT.TI");
  if (task)
  {
     Effect.BlindUp("C.ACT.TI");
     Element.show("C.ACT.TIOffImg");
     Element.hide("C.ACT.TIOnImg");
  }
    var task = $("C.ACT.PACDC");
  if (task)
  {
     Effect.BlindUp("C.ACT.PACDC");
     Element.show("C.ACT.PACDCOffImg");
     Element.hide("C.ACT.PACDCOnImg");
  }
var task = $("C.ACT.ACDC");
  if (task)
  {
     Effect.BlindUp("C.ACT.ACDC");
     Element.show("C.ACT.ACDCOffImg");
     Element.hide("C.ACT.ACDCOnImg");
  }
var task = $("C.ACT.VUPC");
  if (task)
  {
     Effect.BlindUp("C.ACT.VUPC");
     Element.show("C.ACT.VUPCOffImg");
     Element.hide("C.ACT.VUPCOnImg");
  }
  var task = $("C.ACT.PD");
  if (task)
  {
     Effect.BlindUp("C.ACT.PD");
     Element.show("C.ACT.PDOffImg");
     Element.hide("C.ACT.PDOnImg");
  }
  var task = $("C.ACT.DCMRCCC");
  if (task)
  {
     Effect.BlindUp("C.ACT.DCMRCCC");
     Element.show("C.ACT.DCMRCCCOffImg");
     Element.hide("C.ACT.DCMRCCCOnImg");
  }
  var task = $("C.ACT.CJIA");
  if (task)
  {
     Effect.BlindUp("C.ACT.CJIA");
     Element.show("C.ACT.CJIAOffImg");
     Element.hide("C.ACT.CJIAOnImg");
  }
  var task = $("C.ACT.CMAWC");
  if (task)
  {
     Effect.BlindUp("C.ACT.CMAWC");
     Element.show("C.ACT.CMAWCOffImg");
     Element.hide("C.ACT.CMAWCOnImg");
  }
  var task = $("C.ACT.DEUT");
  if (task)
  {
     Effect.BlindUp("C.ACT.DEUT");
     Element.show("C.ACT.DEUTOffImg");
     Element.hide("C.ACT.DEUTOnImg");
  }
  var task = $("C.ACT.BEUT");
  if (task)
  {
     Effect.BlindUp("C.ACT.BEUT");
     Element.show("C.ACT.BEUTOffImg");
     Element.hide("C.ACT.BEUTOnImg");
  }
  var task = $("C.ACT.TEUC");
  if (task)
  {
     Effect.BlindUp("C.ACT.TEUC");
     Element.show("C.ACT.TEUCOffImg");
     Element.hide("C.ACT.TEUCOnImg");
  }
  var task = $("C.ACT.IOCM");
  if (task)
  {
     Effect.BlindUp("C.ACT.IOCM");
     Element.show("C.ACT.IOCMOffImg");
     Element.hide("C.ACT.IOCMOnImg");
  }
 
  /*
   * TRANSITION ACTIVITIES
   */
  var task = $("D.ACT.SUAT");
  if (task)
  {
     Effect.BlindUp("D.ACT.SUAT");
     Element.show("D.ACT.SUATOffImg");
     Element.hide("D.ACT.SUATOnImg");
  }
  var task = $("D.ACT.CPTST");
  if (task)
  {
     Effect.BlindUp("D.ACT.CPTST");
     Element.show("D.ACT.CPTSTOffImg");
     Element.hide("D.ACT.CPTSTOnImg");
  }
  var task = $("D.ACT.PPE");
  if (task)
  {
     Effect.BlindUp("D.ACT.PPE");
     Element.show("D.ACT.PPEOffImg");
     Element.hide("D.ACT.PPEOnImg");
  }
  var task = $("D.ACT.CDT");
  if (task)
  {
     Effect.BlindUp("D.ACT.CDT");
     Element.show("D.ACT.CDTOffImg");
     Element.hide("D.ACT.CDTOnImg");
  }
  var task = $("D.ACT.DCMRCCT");
  if (task)
  {
     Effect.BlindUp("D.ACT.DCMRCCT");
     Element.show("D.ACT.DCMRCCTOffImg");
     Element.hide("D.ACT.DCMRCCTOnImg");
  }
  var task = $("D.ACT.CITA");
  if (task)
  {
     Effect.BlindUp("D.ACT.CITA");
     Element.show("D.ACT.CITAOffImg");
     Element.hide("D.ACT.CITAOnImg");
  }
  var task = $("D.ACT.TEUT");
  if (task)
  {
     Effect.BlindUp("D.ACT.TEUT");
     Element.show("D.ACT.TEUTOffImg");
     Element.hide("D.ACT.TEUTOnImg");
  }
  var task = $("D.ACT.FD");
  if (task)
  {
     Effect.BlindUp("D.ACT.FD");
     Element.show("D.ACT.FDOffImg");
     Element.hide("D.ACT.FDOnImg");
  }
  var task = $("D.ACT.GP");
  if (task)
  {
     Effect.BlindUp("D.ACT.GP");
     Element.show("D.ACT.GPOffImg");
     Element.hide("D.ACT.GPOnImg");
  }
  var task = $("D.ACT.SIP");
  if (task)
  {
     Effect.BlindUp("D.ACT.SIP");
     Element.show("D.ACT.SIPOffImg");
     Element.hide("D.ACT.SIPOnImg");
  }
 
  /*
   * PRODUCTION ACTIVITIES
   */
  var task = $("E.ACT.MPSP");
  if (task)
  {
     Effect.BlindUp("E.ACT.MPSP");
     Element.show("E.ACT.MPSPOffImg");
     Element.hide("E.ACT.MPSPOnImg");
  }
  var task = $("E.ACT.EPS");
  if (task)
  {
     Effect.BlindUp("E.ACT.EPS");
     Element.show("E.ACT.EPSOffImg");
     Element.hide("E.ACT.EPSOnImg");
  }
  var task = $("E.ACT.RPP");
  if (task)
  {
     Effect.BlindUp("E.ACT.RPP");
     Element.show("E.ACT.RPPOffImg");
     Element.hide("E.ACT.RPPOnImg");
  }
  var task = $("E.ACT.US");
  if (task)
  {
     Effect.BlindUp("E.ACT.US");
     Element.show("E.ACT.USOffImg");
     Element.hide("E.ACT.USOnImg");
  }
  var task = $("E.ACT.DCMRCCP");
  if (task)
  {
     Effect.BlindUp("E.ACT.DCMRCCP");
     Element.show("E.ACT.DCMRCCPOffImg");
     Element.hide("E.ACT.DCMRCCPOnImg");
  }
  var task = $("E.ACT.PF");
  if (task)
  {
     Effect.BlindUp("E.ACT.PF");
     Element.show("E.ACT.PFOffImg");
     Element.hide("E.ACT.PFOnImg");
  }
  var task = $("E.ACT.DITTP");
  if (task)
  {
     Effect.BlindUp("E.ACT.DITTP");
     Element.show("E.ACT.DITTPOffImg");
     Element.hide("E.ACT.DITTPOnImg");
  }
  var task = $("E.ACT.SO");
  if (task)
  {
     Effect.BlindUp("E.ACT.SO");
     Element.show("E.ACT.SOOffImg");
     Element.hide("E.ACT.SOOnImg");
  }

  /*
   * PC ACTIVITIES
   */
  var task = $("PC.ACT.PC");
  if (task)
  {
     Effect.BlindUp("PC.ACT.PC");
     Element.show("PC.ACT.PCOffImg");
     Element.hide("PC.ACT.PCOnImg");
  }
  var task = $("PC.ACT.PCSUM1");
  if (task)
  {
     Effect.BlindUp("PC.ACT.PCSUM1");
     Element.show("PC.ACT.PCSUM1OffImg");
     Element.hide("PC.ACT.PCSUM1OnImg");
  }
  var task = $("PC.ACT.PCSUM2");
  if (task)
  {
     Effect.BlindUp("PC.ACT.PCSUM2");
     Element.show("PC.ACT.PCSUM2OffImg");
     Element.hide("PC.ACT.PCSUM2OnImg");
  }
  var task = $("PC.ACT.PCSUM3");
  if (task)
  {
     Effect.BlindUp("PC.ACT.PCSUM3");
     Element.show("PC.ACT.PCSUM3OffImg");
     Element.hide("PC.ACT.PCSUM3OnImg");
  }
  var task = $("PC.ACT.GA");
  if (task)
  {
     Effect.BlindUp("PC.ACT.GA");
     Element.show("PC.ACT.GAOffImg");
     Element.hide("PC.ACT.GAOnImg");
  }
  var task = $("PC.ACT.CPC");
  if (task)
  {
     Effect.BlindUp("PC.ACT.CPC");
     Element.show("PC.ACT.CPCOffImg");
     Element.hide("PC.ACT.CPCOnImg");
  }
  var task = $("PC.ACT.DLLAP");
  if (task)
  {
     Effect.BlindUp("PC.ACT.DLLAP");
     Element.show("PC.ACT.DLLAPOffImg");
     Element.hide("PC.ACT.DLLAPOnImg");
  }

  /*
   * PGM ACTIVITIES
   */
  var task = $("PGM.ACT.PGM");
  if (task)
  {
     Effect.BlindUp("PGM.ACT.PGM");
     Element.show("PGM.ACT.PGMOffImg");
     Element.hide("PGM.ACT.PGMOnImg");
  }
}

function expandAllWBS()
{
  /*
   * PS ACTIVITIES
   */
  var task = $("PS.ACT.PS");
  if (task)
  {
    Effect.BlindDown("PS.ACT.PS");
    Element.hide("PS.ACT.PSOffImg");
    Element.show("PS.ACT.PSOnImg");
  }
  var task = $("PS.ACT.PSSUM1");
  if (task)
  {
    Effect.BlindDown("PS.ACT.PSSUM1");
    Element.hide("PS.ACT.PSSUM1OffImg");
    Element.show("PS.ACT.PSSUM1OnImg");
  }
  var task = $("PS.ACT.PSSUM2");
  if (task)
  {
    Effect.BlindDown("PS.ACT.PSSUM2");
    Element.hide("PS.ACT.PSSUM2OffImg");
    Element.show("PS.ACT.PSSUM2OnImg");
  }
  var task = $("PS.ACT.PSSUM3");
  if (task)
  {
    Effect.BlindDown("PS.ACT.PSSUM3");
    Element.hide("PS.ACT.PSSUM3OffImg");
    Element.show("PS.ACT.PSSUM3OnImg");
  }
  var task = $("PS.ACT.PSSUM4");
  if (task)
  {
    Effect.BlindDown("PS.ACT.PSSUM4");
    Element.hide("PS.ACT.PSSUM4OffImg");
    Element.show("PS.ACT.PSSUM4OnImg");
  }
  var task = $("PS.ACT.PSSUM5");
  if (task)
  {
    Effect.BlindDown("PS.ACT.PSSUM5");
    Element.hide("PS.ACT.PSSUM5OffImg");
    Element.show("PS.ACT.PSSUM5OnImg");
  }
  var task = $("PS.ACT.PSSUM6");
  if (task)
  {
    Effect.BlindDown("PS.ACT.PSSUM6");
    Element.hide("PS.ACT.PSSUM6OffImg");
    Element.show("PS.ACT.PSSUM6OnImg");
  }
  var task = $("PS.ACT.PSSUM7");
  if (task)
  {
    Effect.BlindDown("PS.ACT.PSSUM7");
    Element.hide("PS.ACT.PSSUM7OffImg");
    Element.show("PS.ACT.PSSUM7OnImg");
  }
  var task = $("PS.ACT.RBC");
  if (task)
  {
    Effect.BlindDown("PS.ACT.RBC");
    Element.hide("PS.ACT.RBCOffImg");
    Element.show("PS.ACT.RBCOnImg");
  }
  var task = $("PS.ACT.RPAC");
  if (task)
  {
    Effect.BlindDown("PS.ACT.RPAC");
    Element.hide("PS.ACT.RPACOffImg");
    Element.show("PS.ACT.RPACOnImg");
  }
  var task = $("PS.ACT.VSSOS");
  if (task)
  {
    Effect.BlindDown("PS.ACT.VSSOS");
    Element.hide("PS.ACT.VSSOSOffImg");
    Element.show("PS.ACT.VSSOSOnImg");
  }
  var task = $("PS.ACT.DW");
  if (task)
  {
    Effect.BlindDown("PS.ACT.DW");
    Element.hide("PS.ACT.DWOffImg");
    Element.show("PS.ACT.DWOnImg");
  }
  var task = $("PS.ACT.DSPB");
  if (task)
  {
    Effect.BlindDown("PS.ACT.DSPB");
    Element.hide("PS.ACT.DSPBOffImg");
    Element.show("PS.ACT.DSPBOnImg");
  }
  var task = $("PS.ACT.CPMP");
  if (task)
  {
    Effect.BlindDown("PS.ACT.CPMP");
    Element.hide("PS.ACT.CPMPOffImg");
    Element.show("PS.ACT.CPMPOnImg");
  }
  var task = $("PS.ACT.EPI");
  if (task)
  {
    Effect.BlindDown("PS.ACT.EPI");
    Element.hide("PS.ACT.EPIOffImg");
    Element.show("PS.ACT.EPIOnImg");
  }

  /*
   * PEC ACTIVITIES
   */
  var task = $("PEC.ACT.PEC");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.PEC");
    Element.hide("PEC.ACT.PECOffImg");
    Element.show("PEC.ACT.PECOnImg");
  }
  var task = $("PEC.ACT.PECSUM1");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.PECSUM1");
    Element.hide("PEC.ACT.PECSUM1OffImg");
    Element.show("PEC.ACT.PECSUM1OnImg");
  }
  var task = $("PEC.ACT.PECSUM2");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.PECSUM2");
    Element.hide("PEC.ACT.PECSUM2OffImg");
    Element.show("PEC.ACT.PECSUM2OnImg");
  }
  var task = $("PEC.ACT.PECSUM3");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.PECSUM3");
    Element.hide("PEC.ACT.PECSUM3OffImg");
    Element.show("PEC.ACT.PECSUM3OnImg");
  }
  var task = $("PEC.ACT.PECSUM4");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.PECSUM4");
    Element.hide("PEC.ACT.PECSUM4OffImg");
    Element.show("PEC.ACT.PECSUM4OnImg");
  }
  var task = $("PEC.ACT.PECSUM5");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.PECSUM5");
    Element.hide("PEC.ACT.PECSUM5OffImg");
    Element.show("PEC.ACT.PECSUM5OnImg");
  }
  var task = $("PEC.ACT.PECSUM6");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.PECSUM6");
    Element.hide("PEC.ACT.PECSUM6OffImg");
    Element.show("PEC.ACT.PECSUM6OnImg");
  }
  var task = $("PEC.ACT.PECSUM7");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.PECSUM7");
    Element.hide("PEC.ACT.PECSUM7OffImg");
    Element.show("PEC.ACT.PECSUM7OnImg");
  }
  var task = $("PEC.ACT.PECSUM8");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.PECSUM8");
    Element.hide("PEC.ACT.PECSUM8OffImg");
    Element.show("PEC.ACT.PECSUM8OnImg");
  }
  var task = $("PEC.ACT.PECSUM9");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.PECSUM9");
    Element.hide("PEC.ACT.PECSUM9OffImg");
    Element.show("PEC.ACT.PECSUM9OnImg");
  }
  var task = $("PEC.ACT.PECSUM10");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.PECSUM10");
    Element.hide("PEC.ACT.PECSUM10OffImg");
    Element.show("PEC.ACT.PECSUM10OnImg");
  }
  var task = $("PEC.ACT.MSAA");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.MSAA");
    Element.hide("PEC.ACT.MSAAOffImg");
    Element.show("PEC.ACT.MSAAOnImg");
  }
  var task = $("PEC.ACT.MPF");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.MPF");
    Element.hide("PEC.ACT.MPFOffImg");
    Element.show("PEC.ACT.MPFOnImg");
  }
  var task = $("PEC.ACT.MPW");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.MPW");
    Element.hide("PEC.ACT.MPWOffImg");
    Element.show("PEC.ACT.MPWOnImg");
  }
  var task = $("PEC.ACT.MRIP");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.MRIP");
    Element.hide("PEC.ACT.MRIPOffImg");
    Element.show("PEC.ACT.MRIPOnImg");
  }
  var task = $("PEC.ACT.OMT");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.OMT");
    Element.hide("PEC.ACT.OMTOffImg");
    Element.show("PEC.ACT.OMTOnImg");
  }
  var task = $("PEC.ACT.MCOP");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.MCOP");
    Element.hide("PEC.ACT.MCOPOffImg");
    Element.show("PEC.ACT.MCOPOnImg");
  }
  var task = $("PEC.ACT.CECRM");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.CECRM");
    Element.hide("PEC.ACT.CECRMOffImg");
    Element.show("PEC.ACT.CECRMOnImg");
  }
  var task = $("PEC.ACT.MPQ");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.MPQ");
    Element.hide("PEC.ACT.MPQOffImg");
    Element.show("PEC.ACT.MPQOnImg");
  }
  var task = $("PEC.ACT.MMI");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.MMI");
    Element.hide("PEC.ACT.MMIOffImg");
    Element.show("PEC.ACT.MMIOnImg");
  }
  var task = $("PEC.ACT.APGCS");
  if (task)
  {
    Effect.BlindDown("PEC.ACT.APGCS");
    Element.hide("PEC.ACT.APGCSOffImg");
    Element.show("PEC.ACT.APGCSOnImg");
  }
  
  /*
   * INITIATE ACTIVITIES
   */  
  var task = $("INIT.ACT.PEF");
  if (task)
  {
    Effect.BlindDown("INIT.ACT.PEF");
    Element.hide("INIT.ACT.PEFOffImg");
    Element.show("INIT.ACT.PEFOnImg");
  }
  var task = $("INIT.ACT.PD");
  if (task)
  {
    Effect.BlindDown("INIT.ACT.PD");
    Element.hide("INIT.ACT.PDOffImg");
    Element.show("INIT.ACT.PDOnImg");
  }
  var task = $("INIT.ACT.CEAWE");
  if (task)
  {
    Effect.BlindDown("INIT.ACT.CEAWE");
    Element.hide("INIT.ACT.CEAWEOffImg");
    Element.show("INIT.ACT.CEAWEOnImg");
  }
  var task = $("INIT.ACT.DMCEC");
  if (task)
  {
    Effect.BlindDown("INIT.ACT.DMCEC");
    Element.hide("INIT.ACT.DMCECOffImg");
    Element.show("INIT.ACT.DMCECOnImg");
  }
  var task = $("INIT.ACT.EDGI");
  if (task)
  {
    Effect.BlindDown("INIT.ACT.EDGI");
    Element.hide("INIT.ACT.EDGIOffImg");
    Element.show("INIT.ACT.EDGIOnImg");
  }
  var task = $("INIT.ACT.EDBPD");
  if (task)
  {
    Effect.BlindDown("INIT.ACT.EDBPD");
    Element.hide("INIT.ACT.EDBPDOffImg");
    Element.show("INIT.ACT.EDBPDOnImg");
  }
  var task = $("INIT.ACT.EDF");
  if (task)
  {
    Effect.BlindDown("INIT.ACT.EDF");
    Element.hide("INIT.ACT.EDFOffImg");
    Element.show("INIT.ACT.EDFOnImg");
  }
  var task = $("INIT.ACT.DSPC");
  if (task)
  {
    Effect.BlindDown("INIT.ACT.DSPC");
    Element.hide("INIT.ACT.DSPCOffImg");
    Element.show("INIT.ACT.DSPCOnImg");
  }
  var task = $("INIT.ACT.PTI");
  if (task)
  {
    Effect.BlindDown("INIT.ACT.PTI");
    Element.hide("INIT.ACT.PTIOffImg");
    Element.show("INIT.ACT.PTIOnImg");
  }

  /*
   * MAINTAIN AND EVOLVE ACTIVITIES
   */
  var task = $("ME.ACT.ME");
  if (task)
  {
    Effect.BlindDown("ME.ACT.ME");
    Element.hide("ME.ACT.MEOffImg");
    Element.show("ME.ACT.MEOnImg");
  }

  /*
   * INCEPTION ACTIVITIES
   */
  var task = $("A.INCEPTION");
  if (task)
  {
    Effect.BlindDown("A.INCEPTION");
    Element.hide("A.INCEPTIONOffImg");
    Element.show("A.INCEPTIONOnImg");
  }
  var task = $("A.ACT.GBRI");
  if (task)
  {
    Effect.BlindDown("A.ACT.GBRI");
    Element.hide("A.ACT.GBRIOffImg");
    Element.show("A.ACT.GBRIOnImg");
  }
  var task = $("A.ACT.ECBB");
  if (task)
  {
    Effect.BlindDown("A.ACT.ECBB");
    Element.hide("A.ACT.ECBBOffImg");
    Element.show("A.ACT.ECBBOnImg");
  }
  var task = $("A.ACT.GR");
  if (task)
  {
    Effect.BlindDown("A.ACT.GR");
    Element.hide("A.ACT.GROffImg");
    Element.show("A.ACT.GROnImg");
  }
  var task = $("A.ACT.CR");
  if (task)
  {
    Effect.BlindDown("A.ACT.CR");
    Element.hide("A.ACT.CROffImg");
    Element.show("A.ACT.CROnImg");
  }
  var task = $("A.ACT.PSUIA");
  if (task)
  {
    Effect.BlindDown("A.ACT.PSUIA");
    Element.hide("A.ACT.PSUIAOffImg");
    Element.show("A.ACT.PSUIAOnImg");
  }
  var task = $("A.ACT.CCPI");
  if (task)
  {
    Effect.BlindDown("A.ACT.CCPI");
    Element.hide("A.ACT.CCPIOffImg");
    Element.show("A.ACT.CCPIOnImg");
  }
  var task = $("A.ACT.GSP");
  if (task)
  {
     Effect.BlindDown("A.ACT.GSP");
     Element.hide("A.ACT.GSPOffImg");
     Element.show("A.ACT.GSPOnImg");
  }
  var task = $("A.ACT.SKSD");
  if (task)
  {
     Effect.BlindDown("A.ACT.SKSD");
     Element.hide("A.ACT.SKSDOffImg");
     Element.show("A.ACT.SKSDOnImg");
  }
  var task = $("A.ACT.PPJT");
  if (task)
  {
     Effect.BlindDown("A.ACT.PPJT");
     Element.hide("A.ACT.PPJTOffImg");
     Element.show("A.ACT.PPJTOnImg");
  }
  var task = $("A.ACT.CMAHC");
  if (task)
  {
     Effect.BlindDown("A.ACT.CMAHC");
     Element.hide("A.ACT.CMAHCOffImg");
     Element.show("A.ACT.CMAHCOnImg");
  }
  var task = $("A.ACT.TPT");
  if (task)
  {
     Effect.BlindDown("A.ACT.TPT");
     Element.hide("A.ACT.TPTOffImg");
     Element.show("A.ACT.TPTOnImg");
  }
  var task = $("A.ACT.CEAW");
  if (task)
  {
     Effect.BlindDown("A.ACT.CEAW");
     Element.hide("A.ACT.CEAWOffImg");
     Element.show("A.ACT.CEAWOnImg");
  }
  var task = $("A.ACT.CAWI");
  if (task)
  {
     Effect.BlindDown("A.ACT.CAWI");
     Element.hide("A.ACT.CAWIOffImg");
     Element.show("A.ACT.CAWIOnImg");
  }
  var task = $("A.ACT.CORA");
  if (task)
  {
     Effect.BlindDown("A.ACT.CORA");
     Element.hide("A.ACT.CORAOffImg");
     Element.show("A.ACT.CORAOnImg");
  }
  var task = $("A.ACT.DCMRCCI");
  if (task)
  {
     Effect.BlindDown("A.ACT.DCMRCCI");
     Element.hide("A.ACT.DCMRCCIOffImg");
     Element.show("A.ACT.DCMRCCIOnImg");
  }
  var task = $("A.ACT.LCOB");
  if (task)
  {
     Effect.BlindDown("A.ACT.LCOB");
     Element.hide("A.ACT.LCOBOffImg");
     Element.show("A.ACT.LCOBOnImg");
  }

  /*
   * ELABORATION ACTIVITIES
   */
  var task = $("B.ACT.DPS");
  if (task)
  {
     Effect.BlindDown("B.ACT.DPS");
     Element.hide("B.ACT.DPSOffImg");
     Element.show("B.ACT.DPSOnImg");
  }
  var task = $("B.ACT.DI");
  if (task)
  {
     Effect.BlindDown("B.ACT.DI");
     Element.hide("B.ACT.DIOffImg");
     Element.show("B.ACT.DIOnImg");
  }
  var task = $("B.ACT.PEE");
  if (task)
  {
     Effect.BlindDown("B.ACT.PEE");
     Element.hide("B.ACT.PEEOffImg");
     Element.show("B.ACT.PEEOnImg");
  }
  var task = $("B.ACT.GBRE");
  if (task)
  {
     Effect.BlindDown("B.ACT.GBRE");
     Element.hide("B.ACT.GBREOffImg");
     Element.show("B.ACT.GBREOnImg");
  }
  var task = $("B.ACT.DTP");
  if (task)
  {
     Effect.BlindDown("B.ACT.DTP");
     Element.hide("B.ACT.DTPOffImg");
     Element.show("B.ACT.DTPOnImg");
  }
  var task = $("B.ACT.SSC");
  if (task)
  {
     Effect.BlindDown("B.ACT.SSC");
     Element.hide("B.ACT.SSCOffImg");
     Element.show("B.ACT.SSCOnImg");
  }
  var task = $("B.ACT.PVC");
  if (task)
  {
     Effect.BlindDown("B.ACT.PVC");
     Element.hide("B.ACT.PVCOffImg");
     Element.show("B.ACT.PVCOnImg");
  }
  var task = $("B.ACT.PGA");
  if (task)
  {
     Effect.BlindDown("B.ACT.PGA");
     Element.hide("B.ACT.PGAOffImg");
     Element.show("B.ACT.PGAOnImg");
  }
  var task = $("B.ACT.DUCM");
  if (task)
  {
     Effect.BlindDown("B.ACT.DUCM");
     Element.hide("B.ACT.DUCMOffImg");
     Element.show("B.ACT.DUCMOnImg");
  }
  var task = $("B.ACT.CCPE");
  if (task)
  {
     Effect.BlindDown("B.ACT.CCPE");
     Element.hide("B.ACT.CCPEOffImg");
     Element.show("B.ACT.CCPEOnImg");
  }
  var task = $("B.ACT.CS");
  if (task)
  {
     Effect.BlindDown("B.ACT.CS");
     Element.hide("B.ACT.CSOffImg");
     Element.show("B.ACT.CSOnImg");
  }
  var task = $("B.ACT.BSA");
  if (task)
  {
     Effect.BlindDown("B.ACT.BSA");
     Element.hide("B.ACT.BSAOffImg");
     Element.show("B.ACT.BSAOnImg");
  }
  var task = $("B.ACT.DUCD");
  if (task)
  {
     Effect.BlindDown("B.ACT.DUCD");
     Element.hide("B.ACT.DUCDOffImg");
     Element.show("B.ACT.DUCDOnImg");
  }
  var task = $("B.ACT.AE");
  if (task)
  {
     Effect.BlindDown("B.ACT.AE");
     Element.hide("B.ACT.AEOffImg");
     Element.show("B.ACT.AEOnImg");
  }
  var task = $("B.ACT.DE");
  if (task)
  {
     Effect.BlindDown("B.ACT.DE");
     Element.hide("B.ACT.DEOffImg");
     Element.show("B.ACT.DEOnImg");
  }
  var task = $("B.ACT.DCCTSE");
  if (task)
  {
     Effect.BlindDown("B.ACT.DCCTSE");
     Element.hide("B.ACT.DCCTSEOffImg");
     Element.show("B.ACT.DCCTSEOnImg");
  }
  var task = $("B.ACT.DSTSE");
  if (task)
  {
     Effect.BlindDown("B.ACT.DSTSE");
     Element.hide("B.ACT.DSTSEOffImg");
     Element.show("B.ACT.DSTSEOnImg");
  }
  var task = $("B.ACT.DVCSP");
  if (task)
  {
     Effect.BlindDown("B.ACT.DVCSP");
     Element.hide("B.ACT.DVCSPOffImg");
     Element.show("B.ACT.DVCSPOnImg");
  }
  var task = $("B.ACT.PCCTE");
  if (task)
  {
     Effect.BlindDown("B.ACT.PCCTE");
     Element.hide("B.ACT.PCCTEOffImg");
     Element.show("B.ACT.PCCTEOnImg");
  }
  var task = $("B.ACT.PSTE");
  if (task)
  {
     Effect.BlindDown("B.ACT.PSTE");
     Element.hide("B.ACT.PSTEOffImg");
     Element.show("B.ACT.PSTEOnImg");
  }
  var task = $("B.ACT.VUPE");
  if (task)
  {
     Effect.BlindDown("B.ACT.VUPE");
     Element.hide("B.ACT.VUPEOffImg");
     Element.show("B.ACT.VUPEOnImg");
  }
  var task = $("B.ACT.PPM");
  if (task)
  {
     Effect.BlindDown("B.ACT.PPM");
     Element.hide("B.ACT.PPMOffImg");
     Element.show("B.ACT.PPMOnImg");
  }
  var task = $("B.ACT.PACDE");
  if (task)
  {
     Effect.BlindDown("B.ACT.PACDE");
     Element.hide("B.ACT.PACDEOffImg");
     Element.show("B.ACT.PACDEOnImg");
  }
  var task = $("B.ACT.PBPII");
  if (task)
  {
     Effect.BlindDown("B.ACT.PBPII");
     Element.hide("B.ACT.PBPIIOffImg");
     Element.show("B.ACT.PBPIIOnImg");
  }
  var task = $("B.ACT.DCMRCCE");
  if (task)
  {
     Effect.BlindDown("B.ACT.DCMRCCE");
     Element.hide("B.ACT.DCMRCCEOffImg");
     Element.show("B.ACT.DCMRCCEOnImg");
  }
  var task = $("B.ACT.LCAR");
  if (task)
  {
     Effect.BlindDown("B.ACT.LCAR");
     Element.hide("B.ACT.LCAROffImg");
     Element.show("B.ACT.LCAROnImg");
  }

  /*
   * CONSTRUCTION ACTIVITIES
   */
  var task = $("C.ACT.FR");
  if (task)
  {
     Effect.BlindDown("C.ACT.FR");
     Element.hide("C.ACT.FROffImg");
     Element.show("C.ACT.FROnImg");
  }
  var task = $("C.ACT.AC");
  if (task)
  {
     Effect.BlindDown("C.ACT.AC");
     Element.hide("C.ACT.ACOffImg");
     Element.show("C.ACT.ACOnImg");
  }
  var task = $("C.ACT.DC");
  if (task)
  {
     Effect.BlindDown("C.ACT.DC");
     Element.hide("C.ACT.DCOffImg");
     Element.show("C.ACT.DCOnImg");
  }
  var task = $("C.ACT.PTP");
  if (task)
  {
     Effect.BlindDown("C.ACT.PTP");
     Element.hide("C.ACT.PTPOffImg");
     Element.show("C.ACT.PTPOnImg");
  }
  var task = $("C.ACT.PEC");
  if (task)
  {
     Effect.BlindDown("C.ACT.PEC");
     Element.hide("C.ACT.PECOffImg");
     Element.show("C.ACT.PECOnImg");
  }
  var task = $("C.ACT.DCCTSC");
  if (task)
  {
     Effect.BlindDown("C.ACT.DCCTSC");
     Element.hide("C.ACT.DCCTSCOffImg");
     Element.show("C.ACT.DCCTSCOnImg");
  }
  var task = $("C.ACT.DSTSC");
  if (task)
  {
     Effect.BlindDown("C.ACT.DSTSC");
     Element.hide("C.ACT.DSTSCOffImg");
     Element.show("C.ACT.DSTSCOnImg");
  }
  var task = $("C.ACT.DSITS");
  if (task)
  {
     Effect.BlindDown("C.ACT.DSITS");
     Element.hide("C.ACT.DSITSOffImg");
     Element.show("C.ACT.DSITSOnImg");
  }
  var task = $("C.ACT.ICC");
  if (task)
  {
     Effect.BlindDown("C.ACT.ICC");
     Element.hide("C.ACT.ICCOffImg");
     Element.show("C.ACT.ICCOnImg");
  }
  var task = $("C.ACT.PCCTC");
  if (task)
  {
     Effect.BlindDown("C.ACT.PCCTC");
     Element.hide("C.ACT.PCCTCOffImg");
     Element.show("C.ACT.PCCTCOnImg");
  }
  var task = $("C.ACT.PST");
  if (task)
  {
     Effect.BlindDown("C.ACT.PST");
     Element.hide("C.ACT.PSTOffImg");
     Element.show("C.ACT.PSTOnImg");
  }
  var task = $("C.ACT.PSTC");
  if (task)
  {
     Effect.BlindDown("C.ACT.PSTC");
     Element.hide("C.ACT.PSTCOffImg");
     Element.show("C.ACT.PSTCOnImg");
  }
  var task = $("C.ACT.PSIT");
  if (task)
  {
     Effect.BlindDown("C.ACT.PSIT");
     Element.hide("C.ACT.PSITOffImg");
     Element.show("C.ACT.PSITOnImg");
  }
  var task = $("C.ACT.PPT");
  if (task)
  {
     Effect.BlindDown("C.ACT.PPT");
     Element.hide("C.ACT.PPTOffImg");
     Element.show("C.ACT.PPTOnImg");
  }
  var task = $("C.ACT.PT");
  if (task)
  {
     Effect.BlindDown("C.ACT.PT");
     Element.hide("C.ACT.PTOffImg");
     Element.show("C.ACT.PTOnImg");
  }
    var task = $("C.ACT.PCO");
  if (task)
  {
     Effect.BlindDown("C.ACT.PCO");
     Element.hide("C.ACT.PCOOffImg");
     Element.show("C.ACT.PCOOnImg");
  }
var task = $("C.ACT.TI");
  if (task)
  {
     Effect.BlindDown("C.ACT.TI");
     Element.hide("C.ACT.TIOffImg");
     Element.show("C.ACT.TIOnImg");
  }
  var task = $("C.ACT.PACDC");
  if (task)
  {
     Effect.BlindDown("C.ACT.PACDC");
     Element.hide("C.ACT.PACDCOffImg");
     Element.show("C.ACT.PACDCOnImg");
  }
  var task = $("C.ACT.ACDC");
  if (task)
  {
     Effect.BlindDown("C.ACT.ACDC");
     Element.hide("C.ACT.ACDCOffImg");
     Element.show("C.ACT.ACDCOnImg");
  }
  var task = $("C.ACT.VUPC");
  if (task)
  {
     Effect.BlindDown("C.ACT.VUPC");
     Element.hide("C.ACT.VUPCOffImg");
     Element.show("C.ACT.VUPCOnImg");
  }
  var task = $("C.ACT.PD");
  if (task)
  {
     Effect.BlindDown("C.ACT.PD");
     Element.hide("C.ACT.PDOffImg");
     Element.show("C.ACT.PDOnImg");
  }
  var task = $("C.ACT.DCMRCCC");
  if (task)
  {
     Effect.BlindDown("C.ACT.DCMRCCC");
     Element.hide("C.ACT.DCMRCCCOffImg");
     Element.show("C.ACT.DCMRCCCOnImg");
  }
  var task = $("C.ACT.CJIA");
  if (task)
  {
     Effect.BlindDown("C.ACT.CJIA");
     Element.hide("C.ACT.CJIAOffImg");
     Element.show("C.ACT.CJIAOnImg");
  }
  var task = $("C.ACT.CMAWC");
  if (task)
  {
     Effect.BlindDown("C.ACT.CMAWC");
     Element.hide("C.ACT.CMAWCOffImg");
     Element.show("C.ACT.CMAWCOnImg");
  }
  var task = $("C.ACT.DEUT");
  if (task)
  {
     Effect.BlindDown("C.ACT.DEUT");
     Element.hide("C.ACT.DEUTOffImg");
     Element.show("C.ACT.DEUTOnImg");
  }
  var task = $("C.ACT.BEUT");
  if (task)
  {
     Effect.BlindDown("C.ACT.BEUT");
     Element.hide("C.ACT.BEUTOffImg");
     Element.show("C.ACT.BEUTOnImg");
  }
  var task = $("C.ACT.TEUC");
  if (task)
  {
     Effect.BlindDown("C.ACT.TEUC");
     Element.hide("C.ACT.TEUCOffImg");
     Element.show("C.ACT.TEUCOnImg");
  }
  var task = $("C.ACT.IOCM");
  if (task)
  {
     Effect.BlindDown("C.ACT.IOCM");
     Element.hide("C.ACT.IOCMOffImg");
     Element.show("C.ACT.IOCMOnImg");
  }
 
  /*
   * TRANSITION ACTIVITIES
   */
  var task = $("D.ACT.SUAT");
  if (task)
  {
     Effect.BlindDown("D.ACT.SUAT");
     Element.hide("D.ACT.SUATOffImg");
     Element.show("D.ACT.SUATOnImg");
  }
  var task = $("D.ACT.CPTST");
  if (task)
  {
     Effect.BlindDown("D.ACT.CPTST");
     Element.hide("D.ACT.CPTSTOffImg");
     Element.show("D.ACT.CPTSTOnImg");
  }
  var task = $("D.ACT.PPE");
  if (task)
  {
     Effect.BlindDown("D.ACT.PPE");
     Element.hide("D.ACT.PPEOffImg");
     Element.show("D.ACT.PPEOnImg");
  }
  var task = $("D.ACT.CDT");
  if (task)
  {
     Effect.BlindDown("D.ACT.CDT");
     Element.hide("D.ACT.CDTOffImg");
     Element.show("D.ACT.CDTOnImg");
  }
  var task = $("D.ACT.DCMRCCT");
  if (task)
  {
     Effect.BlindDown("D.ACT.DCMRCCT");
     Element.hide("D.ACT.DCMRCCTOffImg");
     Element.show("D.ACT.DCMRCCTOnImg");
  }
  var task = $("D.ACT.CITA");
  if (task)
  {
     Effect.BlindDown("D.ACT.CITA");
     Element.hide("D.ACT.CITAOffImg");
     Element.show("D.ACT.CITAOnImg");
  }
  var task = $("D.ACT.TEUT");
  if (task)
  {
     Effect.BlindDown("D.ACT.TEUT");
     Element.hide("D.ACT.TEUTOffImg");
     Element.show("D.ACT.TEUTOnImg");
  }
  var task = $("D.ACT.FD");
  if (task)
  {
     Effect.BlindDown("D.ACT.FD");
     Element.hide("D.ACT.FDOffImg");
     Element.show("D.ACT.FDOnImg");
  }
  var task = $("D.ACT.GP");
  if (task)
  {
     Effect.BlindDown("D.ACT.GP");
     Element.hide("D.ACT.GPOffImg");
     Element.show("D.ACT.GPOnImg");
  }
  var task = $("D.ACT.SIP");
  if (task)
  {
     Effect.BlindDown("D.ACT.SIP");
     Element.hide("D.ACT.SIPOffImg");
     Element.show("D.ACT.SIPOnImg");
  }
 
  /*
   * PRODUCTION ACTIVITIES
   */
  var task = $("E.ACT.MPSP");
  if (task)
  {
     Effect.BlindDown("E.ACT.MPSP");
     Element.hide("E.ACT.MPSPOffImg");
     Element.show("E.ACT.MPSPOnImg");
  }
  var task = $("E.ACT.EPS");
  if (task)
  {
     Effect.BlindDown("E.ACT.EPS");
     Element.hide("E.ACT.EPSOffImg");
     Element.show("E.ACT.EPSOnImg");
  }
  var task = $("E.ACT.RPP");
  if (task)
  {
     Effect.BlindDown("E.ACT.RPP");
     Element.hide("E.ACT.RPPOffImg");
     Element.show("E.ACT.RPPOnImg");
  }
  var task = $("E.ACT.US");
  if (task)
  {
     Effect.BlindDown("E.ACT.US");
     Element.hide("E.ACT.USOffImg");
     Element.show("E.ACT.USOnImg");
  }
  var task = $("E.ACT.DCMRCCP");
  if (task)
  {
     Effect.BlindDown("E.ACT.DCMRCCP");
     Element.hide("E.ACT.DCMRCCPOffImg");
     Element.show("E.ACT.DCMRCCPOnImg");
  }
  var task = $("E.ACT.PF");
  if (task)
  {
     Effect.BlindDown("E.ACT.PF");
     Element.hide("E.ACT.PFOffImg");
     Element.show("E.ACT.PFOnImg");
  }
  var task = $("E.ACT.DITTP");
  if (task)
  {
     Effect.BlindDown("E.ACT.DITTP");
     Element.hide("E.ACT.DITTPOffImg");
     Element.show("E.ACT.DITTPOnImg");
  }
  var task = $("E.ACT.SO");
  if (task)
  {
     Effect.BlindDown("E.ACT.SO");
     Element.hide("E.ACT.SOOffImg");
     Element.show("E.ACT.SOOnImg");
  }

  /*
   * PC ACTIVITIES
   */
  var task = $("PC.ACT.PC");
  if (task)
  {
     Effect.BlindDown("PC.ACT.PC");
     Element.hide("PC.ACT.PCOffImg");
     Element.show("PC.ACT.PCOnImg");
  }
  var task = $("PC.ACT.PCSUM1");
  if (task)
  {
     Effect.BlindDown("PC.ACT.PCSUM1");
     Element.hide("PC.ACT.PCSUM1OffImg");
     Element.show("PC.ACT.PCSUM1OnImg");
  }
  var task = $("PC.ACT.PCSUM2");
  if (task)
  {
     Effect.BlindDown("PC.ACT.PCSUM2");
     Element.hide("PC.ACT.PCSUM2OffImg");
     Element.show("PC.ACT.PCSUM2OnImg");
  }
  var task = $("PC.ACT.PCSUM3");
  if (task)
  {
     Effect.BlindDown("PC.ACT.PCSUM3");
     Element.hide("PC.ACT.PCSUM3OffImg");
     Element.show("PC.ACT.PCSUM3OnImg");
  }
  var task = $("PC.ACT.GA");
  if (task)
  {
     Effect.BlindDown("PC.ACT.GA");
     Element.hide("PC.ACT.GAOffImg");
     Element.show("PC.ACT.GAOnImg");
  }
  var task = $("PC.ACT.CPC");
  if (task)
  {
     Effect.BlindDown("PC.ACT.CPC");
     Element.hide("PC.ACT.CPCOffImg");
     Element.show("PC.ACT.CPCOnImg");
  }
  var task = $("PC.ACT.DLLAP");
  if (task)
  {
     Effect.BlindDown("PC.ACT.DLLAP");
     Element.hide("PC.ACT.DLLAPOffImg");
     Element.show("PC.ACT.DLLAPOnImg");
  }

  /*
   * PGM ACTIVITIES
   */
  var task = $("PGM.ACT.PGM");
  if (task)
  {
     Effect.BlindDown("PGM.ACT.PGM");
     Element.hide("PGM.ACT.PGMOffImg");
     Element.show("PGM.ACT.PGMOnImg");
  }
}

function goAnchor(anchor)
{
  window.location.hash = anchor;
}

function goURL(url)
{
  window.location.url = url;
}

function MM_jumpMenu(targ,selObj,restore)
{
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}