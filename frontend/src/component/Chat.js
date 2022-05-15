import React, { useEffect, useState, useContext } from "react";
import { useLocation } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import {
  TableRow,
  TableHead,
  TableBody,
  Typography
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { MessagesContext } from "../contexts/messagesContext";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




export default function ChatTable(props) {
  const chats = []
  const { state } = useLocation();
  const { id } = state;
  const messagesCtx = useContext(MessagesContext);

  return (
    <Table sx={{ minWidth: 300 }} aria-label="customized table">
      {(messagesCtx.messages.length >= 1) ? (
        <TableBody>
          {messagesCtx.messages.map((chat) => (
            <StyledTableRow key={chat.message}>
              <StyledTableCell component="th" scope="row" align={chat.inbox ? "left" : "right"}>
                <Typography variant="body" gutterBottom >
                  {chat.message}
                </Typography>
                <Typography variant="caption" gutterBottom sx={{ color: "blue" }}>
                  18:50 15-05-2022
                </Typography>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      ) : (
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={6}>
              <Typography variant="h5" component="h5" sx={{ color: "red" }}>
                No Chat(s) Found {console.log(id)}
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
      )
      }
    </Table >

  );
}
