export default {
    copyFolderLink: () => {
        // Assign the evaluated folder link expression to a variable
        const folderLink = myPrequalReview_Table.selectedRow.folderLink;

        // Copy the folder link to clipboard
        copyToClipboard(folderLink);
        
        // Log a message
        console.log("Folder path copied to clipboard:", folderLink);
    }
};