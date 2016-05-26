This is a redux store that takes a reducer on construction. 
The dispatcher will update the state of the application 
and store the state tree in an IPFS merkle-dag object. The 
state can then be distributed via a pub/sub model to all those
who subscribe to a branch of the applications tree.  
