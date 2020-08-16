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
import { IPuddleMessageHanlder } from "./IPuddleMessageHandler";
import { IPuddleMessageQueue } from "./IPuddleMessageQueue";
import { IPuddleConfiguration } from "./IPuddleConfiguration";
import { IPuddleDataStore } from "./IPuddleDataStore";

export interface IPuddleApp {
    /**
     * The configuration that will be given to components
     */
    configuration : IPuddleConfiguration;
    /**
     * The message queue that will be used for Puddle
     */
    messageQueue : IPuddleMessageQueue;
    /**
     * The data store that will be used for Puddle
     */
    dataStore : IPuddleDataStore;
    /**
     * The message handlers that will be run when receiving messages
     */
    messageHandlers : IPuddleMessageHanlder[];
    /**
     * Gets the Puddle version
     *
     * @returns The Puddle version string
     */
    getVersion() : string;
    /**
     * Starts the listening process for Puddle
     * 
     * @remarks
     * Mainly used for delayed start scenarios, such as 
     * being joined to messaging or data containers
     */
    beginListening() : void;
}