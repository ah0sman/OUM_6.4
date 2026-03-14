Attribute VB_Name = "AutoOpen"
Public Sub Main()
On Error GoTo ErrorHandler
    Dim sOMTELocation As String

    'Retrieve OMTE location from Windows Registry
    sOMTELocation = Application.System.PrivateProfileString("", "HKEY_CURRENT_USER\Software\Oracle Method", "OMTELocation")
    'Add "\" at the end, if not there
    If (Not Right$(sOMTELocation, 1) = "\") Then sOMTELocation = sOMTELocation & "\"
    
    'Attach the OumGuide.dot as the attached template
    With ActiveDocument
            .UpdateStylesOnOpen = False
            .AttachedTemplate = sOMTELocation & "Oumguide.dot"
    End With
    
Exit Sub
ErrorHandler:
    'Error message displayed
    MsgBox "Oracle Method Template Engine could not be found in your computer - Document will open with Oracle Method Template Macros disabled.", vbOKOnly + vbExclamation, "Oracle Method Template Engine"
End Sub


