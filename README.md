<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.3`
* __Run:__ Mon Mar 10 2025 01:20:58 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.3 | ✗      | 48959.2    | 19.97        | 8.73          |
| polka                    | 0.5.2    | ✓      | 47538.4    | 20.52        | 8.48          |
| kita                     | 1.1.36   | ✓      | 47278.4    | 20.64        | 8.48          |
| connect                  | 3.7.0    | ✗      | 47229.6    | 20.66        | 8.42          |
| rayo                     | 1.4.6    | ✓      | 47212.0    | 20.68        | 8.42          |
| fastify                  | 4.29.0   | ✓      | 47056.6    | 20.73        | 8.44          |
| server-base              | 7.1.32   | ✗      | 47028.0    | 20.76        | 8.39          |
| 0http                    | 3.5.3    | ✓      | 46948.0    | 20.80        | 8.37          |
| polkadot                 | 1.0.0    | ✗      | 46738.4    | 20.89        | 8.33          |
| server-base-router       | 7.1.32   | ✓      | 46081.6    | 21.15        | 8.22          |
| h3                       | 1.15.1   | ✗      | 45909.6    | 21.28        | 8.19          |
| h3-router                | 1.15.1   | ✓      | 45631.2    | 21.42        | 8.14          |
| connect-router           | 1.3.8    | ✓      | 44036.8    | 22.20        | 7.85          |
| restana                  | 4.9.9    | ✓      | 42196.0    | 23.21        | 7.53          |
| hono                     | 4.7.4    | ✓      | 41248.0    | 23.73        | 6.77          |
| koa                      | 2.16.0   | ✗      | 37589.0    | 26.13        | 6.70          |
| take-five                | 2.0.0    | ✓      | 36571.2    | 26.86        | 13.15         |
| restify                  | 11.1.0   | ✓      | 35878.6    | 27.38        | 6.47          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35450.6    | 27.72        | 6.32          |
| koa-router               | 12.0.1   | ✓      | 34767.4    | 28.25        | 6.20          |
| hapi                     | 21.4.0   | ✓      | 32824.6    | 29.95        | 5.85          |
| fastify-big-json         | 4.29.0   | ✓      | 12101.8    | 82.07        | 139.24        |
| express                  | 4.21.2   | ✓      | 11295.0    | 87.93        | 2.01          |
| express-with-middlewares | 4.21.2   | ✓      | 10619.6    | 93.58        | 3.95          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
