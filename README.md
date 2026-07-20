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
* __Node:__ `v20.20.2`
* __Run:__ Mon Jul 20 2026 04:00:46 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 56417.6    | 17.22        | 10.06         |
| polka                    | 0.5.2    | ✓      | 56106.4    | 17.33        | 10.01         |
| connect                  | 3.7.0    | ✗      | 55783.2    | 17.42        | 9.95          |
| rayo                     | 1.4.6    | ✓      | 55369.6    | 17.56        | 9.87          |
| fastify                  | 4.29.1   | ✓      | 55048.8    | 17.67        | 9.87          |
| server-base-router       | 7.1.32   | ✓      | 54906.4    | 17.72        | 9.79          |
| kita                     | 1.1.36   | ✓      | 54840.0    | 17.74        | 9.83          |
| server-base              | 7.1.32   | ✗      | 54421.6    | 17.88        | 9.71          |
| connect-router           | 1.3.8    | ✓      | 53486.4    | 18.21        | 9.54          |
| polkadot                 | 1.0.0    | ✗      | 49971.2    | 19.52        | 8.91          |
| 0http                    | 3.5.3    | ✓      | 49389.6    | 19.75        | 8.81          |
| hono                     | 4.12.31  | ✓      | 45955.2    | 21.26        | 7.54          |
| h3-router                | 1.15.11  | ✓      | 45880.8    | 21.30        | 8.18          |
| restana                  | 4.9.9    | ✓      | 45601.6    | 21.43        | 8.13          |
| h3                       | 1.15.11  | ✗      | 44569.6    | 21.94        | 7.95          |
| koa                      | 2.16.4   | ✗      | 44263.2    | 22.09        | 7.89          |
| take-five                | 2.0.0    | ✓      | 43711.2    | 22.38        | 15.72         |
| restify                  | 11.1.0   | ✓      | 42216.8    | 23.18        | 7.61          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 42001.6    | 23.30        | 7.49          |
| koa-router               | 12.0.1   | ✓      | 41204.0    | 23.78        | 7.35          |
| hapi                     | 21.4.9   | ✓      | 37151.8    | 26.42        | 6.63          |
| express                  | 4.22.2   | ✓      | 13513.4    | 73.45        | 2.41          |
| express-with-middlewares | 4.22.2   | ✓      | 12383.2    | 80.19        | 4.61          |
| fastify-big-json         | 4.29.1   | ✓      | 11909.0    | 83.39        | 137.03        |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
