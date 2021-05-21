import React from 'react';
import { makeStyles } from '@material-ui/core';
import { TreeItem, TreeView } from '@material-ui/lab';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import FolderIcon from '@material-ui/icons/Folder';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import selectFileViewerData from '../../../store/selectors/selecFileViewerData/selectFileViewerData';
import FileViewerEstructure from '../../../types/FileViewerStructure';
import ExtensionIcon from '../ExtensionIcon/ExtensionIcon';
import openFile from '../../../store/thunks/openFIle/openFile';

const FileViewer = () => {
  const classes = useStyles();
  const fileViewerData = useAppSelector(selectFileViewerData);
  const dispatch = useAppDispatch();

  const onSelectNode = (node: FileViewerEstructure) => {
    dispatch(openFile(node));
  };

  const renderTree = (nodes: FileViewerEstructure) => {
    const { id: nodeId, name: nodeName, extension } = nodes;
    return (
      <TreeItem
        className={classes.treeItem}
        key={nodeId}
        nodeId={nodeId}
        label={nodeName}
        onDoubleClick={() => onSelectNode(nodes)}
        endIcon={<ExtensionIcon extension={extension} />}
      >
        {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
      </TreeItem>
    );
  };
  if (!Object.keys(fileViewerData).length) {
    return <div className={classes.emptyMessage}>No files</div>;
  }
  return (
    <TreeView className={classes.root} defaultCollapseIcon={<FolderOpenIcon />} defaultExpandIcon={<FolderIcon />}>
      {renderTree(fileViewerData)}
    </TreeView>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px',
    height: '100%',
    width: '100%',
  },
  treeItem: {
    padding: '2px',
    color: theme.font,
  },
  emptyMessage: {
    color: theme.font,
  },
}));

export default FileViewer;
