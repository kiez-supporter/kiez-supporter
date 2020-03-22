/**
 * The types defined here are used in tracking
 * Please be mindful if editing the value of the action type string
 * or adapting it's usage for some slightly different event
 * that this could affect how we analyse users.
 *
 * To ensure consistency, please contact whoever is managing
 * the anaylitics before making changes, so that updates
 * are transparent and we can adapt the respective systems.
 *
 * If a type is introduce purely for the sake of tracking,
 * it is ideal to prefix the type with "TRACKING/" to ensure
 * that it isn't removed in favour of redundancy.
 */

export enum AuthType {}

export enum UiType {
    setModal = "UI/SET/MODAL"
}
