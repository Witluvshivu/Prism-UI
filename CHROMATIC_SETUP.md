# Chromatic Visual Testing Setup

This project publishes its Storybook to [Chromatic](https://www.chromatic.com) automatically via GitHub Actions, giving every push and pull request a live, shareable Storybook link plus visual regression testing across all component stories.

## One-time setup (already done for this repo)

- Live Storybook: https://6a550ed75af1ff2ea8808938-mqghxixkfz.chromatic.com/
- Workflow file: `.github/workflows/chromatic.yml`
- 20 components / 340 stories covered

## Required repository secret

The GitHub Actions workflow needs a project token to publish to Chromatic. This only needs to be set once per repo:

1. Go to `https://github.com/Witluvshivu/Prism-UI/settings/secrets/actions`
2. Click **New repository secret**
3. Name: `CHROMATIC_PROJECT_TOKEN`
4. Value: the project token from the Chromatic dashboard (starts with `chpt_...`)
5. Click **Add secret**

Without this secret, the workflow will fail to authenticate with Chromatic.

## What the workflow does

**On pull requests:**
- Builds Storybook
- Publishes to Chromatic
- Comments on the PR with visual diff results
- Fast feedback loop before merging

**On pushes to `main`:**
- Full visual test run across all stories
- Auto-accepts new baselines
- Updates the live published Storybook documentation

**Other features:**
- Automatically cancels duplicate/stale workflow runs when new commits land
- Scoped permissions limited to what Chromatic's GitHub integration needs

## If Chromatic publishing ever breaks

- Confirm the `CHROMATIC_PROJECT_TOKEN` secret still exists and matches the token in the Chromatic dashboard (tokens can be rotated/regenerated there if lost).
- Re-run manually with: `npx chromatic --project-token=<token>` from the project root if you need a one-off publish outside of CI.
- Check the Actions tab on GitHub (`github.com/Witluvshivu/Prism-UI/actions`) for the workflow run logs if a build fails.

## Rotating or regenerating the token

If the token is ever exposed or needs to change: generate a new one from the Chromatic project settings, then update the `CHROMATIC_PROJECT_TOKEN` secret in GitHub (same steps as above — it overwrites the existing value).
