/*
   Copyright 2020 Trevor Manley

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
import { IPuddleMessage } from "./IPuddleMessage";
import { IPuddleApp } from "./IPuddleApp";

export interface IPuddleMessageHandler {
    /**
     * The message type to handle
     */
    messageType:string;
    /**
     * The name of the message handler, should be unique within a message type
     */
    name:string;
    /**
     * The handling of the message
     * @param puddle The instance of Puddle currently processing
     * @param message The message
     */
    handle(puddle:IPuddleApp,message:IPuddleMessage):void;
}