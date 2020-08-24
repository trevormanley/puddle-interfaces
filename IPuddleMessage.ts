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
import { IPuddleObject } from "./IPuddleObject";

export interface IPuddleMessage {
    /**
     * The type of message, e.g AddObject, AddedObject
     */
    messageType:string;
    /**
     * The object that the message is about
     */
    object : IPuddleObject;
    /**
     * The next type of message, e.g for `AddObject` could be `AddedObject`
     * @remarks
     * When null, processing is considered complete
     */
    next?:string;
}